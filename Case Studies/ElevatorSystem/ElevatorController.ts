import { ElevatorCar } from "./ElevatorCar.ts";
import { type ElevatorSelectionStrategy, NearestElevatorStrategy } from "./ElevatorStrategy.ts";
import { Request } from "./Request.ts";
import { Direction, } from "./Enums.ts";




export class ElevatorController {

    private static instance: ElevatorController | null = null

    private constructor() { }
    private elevators: ElevatorCar[] = []
    private strategy: ElevatorSelectionStrategy = new NearestElevatorStrategy()

    public static getInstance(): ElevatorController {
        if (ElevatorController.instance === null) {
            ElevatorController.instance = new ElevatorController();
        }
        return ElevatorController.instance;
    }





    addElevator(elevator: ElevatorCar): void {
        this.elevators.push(elevator)
    }
    setStrategy(strategy: ElevatorSelectionStrategy): void {
        this.strategy = strategy
    }
    handleRequest(request: Request): void {
        const bestElevator = this.strategy.selectElevator(this.elevators, request.getSourceFloor(), request.getDirection())

        if (bestElevator) {
            console.log("\n-> Request: Floor " + request.getSourceFloor() + " to Floor " + request.getDestinationFloor());
            console.log("-> Dispatching Elevator " + bestElevator.getId());

            bestElevator.move(request.getSourceFloor())
            bestElevator.move(request.getDestinationFloor())

        } else {
            console.log("No elevator available");


        }


    }


}

// =============================================
// CLIENT TEST CODE
// =============================================

const controller = ElevatorController.getInstance();

// 1. Setup 3 Lifts in the building
const lift1 = new ElevatorCar("LIFT_1"); // floor 0
const lift2 = new ElevatorCar("LIFT_2"); // floor 0
const lift3 = new ElevatorCar("LIFT_3"); // floor 0

controller.addElevator(lift1);
controller.addElevator(lift2);
controller.addElevator(lift3);

// Set initial floor position for LIFT_2 to floor 5
lift2.move(5);

console.log("\n=============================================");
console.log("🛗 ELEVATOR SYSTEM TEST STARTED");
console.log("=============================================");

// Request 1: User at floor 4 wants to go to floor 8 UP
const request1 = new Request(4, 8, Direction.UP);
controller.handleRequest(request1);

// Request 2: User at floor 1 wants to go to floor 0 DOWN
const request2 = new Request(1, 0, Direction.DOWN);
controller.handleRequest(request2);







