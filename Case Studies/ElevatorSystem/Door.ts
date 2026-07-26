import { DoorState } from "./Enums.ts";

export class Door {
    private state: DoorState;
    constructor() {
        this.state = DoorState.CLOSE;
    }
    open(): void {
        this.state = DoorState.OPEN;
    }
    close(): void {
        this.state = DoorState.CLOSE;
    }
    getState(): DoorState {
        return this.state
    }
} 