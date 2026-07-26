import { Direction } from "./Enums.ts";

export class DisplayScreen {
    private currentFloor: number;
    private direction: Direction;

    constructor(currentFloor: number, direction: Direction) {
        this.currentFloor = currentFloor;
        this.direction = direction;
    }
    display() {
        console.log("Floor: ", this.currentFloor);
        console.log("Direction: ", this.direction);
    }
    upDateDisplay(Floor: number, direction: Direction): void {
        this.currentFloor = Floor
        this.direction = direction;
        this.display();

    }


}
