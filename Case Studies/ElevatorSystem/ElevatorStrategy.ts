import { Direction } from "./Enums.ts";
import { ElevatorCar } from "./ElevatorCar.ts";

export interface ElevatorSelectionStrategy {
    selectElevator(elevators: ElevatorCar[], sourceFloor: number, direction: Direction): ElevatorCar | null;



}
export class NearestElevatorStrategy implements ElevatorSelectionStrategy {
    selectElevator(elevators: ElevatorCar[], sourceFloor: number, direction: Direction): ElevatorCar | null {
        let selectedElevator: ElevatorCar | null = null

        let minDistance = Infinity;

        for (let elevator of elevators) {
            const distance = Math.abs(elevator.getCurrentFloor() - sourceFloor);

            if (distance < minDistance) {
                minDistance = distance
                selectedElevator = elevator
            }
        }
        return selectedElevator

    }
}
