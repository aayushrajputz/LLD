

export const Direction = {
    UP: "UP",
    DOWN: "DOWN",
    IDLE: "IDLE"

} as const;
export type Direction = typeof Direction[keyof typeof Direction]

export const DoorState = {
    OPEN: "OPEN",
    CLOSE: "CLOSE"
} as const;
export type DoorState = typeof DoorState[keyof typeof DoorState];

export const ElevatorState = {
    MOVING: "MOVING",
    IDLE: "IDLE",
    MAINTENENCE: "MAINTENENCE"
} as const;
export type ElevatorState = typeof ElevatorState[keyof typeof ElevatorState]