import { Direction } from "./Enums.ts";

export class Request {
    private sourceFloor: number;
    private destinationFloor: number;
    private direction: Direction;

    constructor(sourceFloor: number, destinationFloor: number, direction: Direction) {
        this.destinationFloor = destinationFloor;
        this.sourceFloor = sourceFloor;
        this.direction = direction;
    }

    public getSourceFloor(): number {
        return this.sourceFloor;
    }

    public getDestinationFloor(): number {
        return this.destinationFloor;
    }

    public getDirection(): Direction {
        return this.direction;
    }
} 