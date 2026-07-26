import { Direction, ElevatorState } from "./Enums.ts";
import { Door } from "./Door.ts";
import { DisplayScreen } from "./Display.ts";

export class ElevatorCar {
    private id: string;
    private currentFloor: number;
    private direction: Direction;
    private state: ElevatorState;
    private doors: Door;
    private display: DisplayScreen;

    constructor(id: string) {
        this.id = id;
        this.currentFloor = 0;
        this.direction = Direction.IDLE;
        this.state = ElevatorState.IDLE;
        this.doors = new Door();
        this.display = new DisplayScreen(0, Direction.IDLE);
    }

    public openDoor(): void {
        this.doors.open();
        console.log("Elevator " + this.id + " door OPEN at floor " + this.currentFloor);
    }

    public closeDoor(): void {
        this.doors.close();
        console.log("Elevator " + this.id + " door CLOSE at floor " + this.currentFloor);
    }

    public move(targetFloor: number): void {
        if (targetFloor > this.currentFloor) {
            this.direction = Direction.UP;
            this.state = ElevatorState.MOVING;
            this.display.upDateDisplay(this.currentFloor, this.direction);
            console.log("Elevator " + this.id + " moving from floor " + this.currentFloor + " to " + targetFloor);
            this.currentFloor = targetFloor;
        } else if (targetFloor < this.currentFloor) {
            this.direction = Direction.DOWN;
            this.state = ElevatorState.MOVING;
            this.display.upDateDisplay(this.currentFloor, this.direction);
            console.log("Elevator " + this.id + " moving from floor " + this.currentFloor + " to " + targetFloor);
            this.currentFloor = targetFloor;
        } else if (targetFloor === this.currentFloor) {
            this.state = ElevatorState.IDLE;
            console.log("Elevator " + this.id + " is already at floor " + this.currentFloor);
            this.direction = Direction.IDLE;
        }

        this.display.upDateDisplay(this.currentFloor, this.direction);
        this.openDoor();
        this.closeDoor();
    }

    public getId(): string {
        return this.id;
    }

    public getCurrentFloor(): number {
        return this.currentFloor;
    }

    public getDoor(): Door {
        return this.doors;
    }

    public getState(): ElevatorState {
        return this.state;
    }

    public getDirection(): Direction {
        return this.direction;
    }
}
