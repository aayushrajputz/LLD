export const VehicleType = {
    TWO_WHEELER: "TWO_WHEELER",
    FOUR_WHEELER: "FOUR_WHEELER",
    HEAVY_VEHICLE: "HEAVY_VEHICLE"
} as const;

export type VehicleType = typeof VehicleType[keyof typeof VehicleType];

export class Vehicle {
    private licensePlate: string;
    private type: VehicleType;
    constructor(licensePlate: string, type: VehicleType) {
        this.licensePlate = licensePlate;
        this.type = type;
    }
    public getLicensePlate(): string {
        return this.licensePlate;
    }
    public getVehicleType(): VehicleType {
        return this.type;
    }
}
export class ParkingSlot {
    private slotId: string;
    private isOccupied: boolean;
    private slotType: VehicleType;
    private parkedVehicle: Vehicle | null;
    constructor(slotId: string, slotType: VehicleType) {
        this.slotId = slotId;
        this.slotType = slotType;
        this.isOccupied = false; // By default starting mein empty rahega
        this.parkedVehicle = null; // No vehicle parked initially
    }
    public getSlotId(): string {
        return this.slotId;
    }
    public getIsOccupied(): boolean {
        return this.isOccupied;
    }
    public getSlotType(): VehicleType {
        return this.slotType;
    }
    public getParkedVehicle(): Vehicle | null {
        return this.parkedVehicle;
    }
    // Helper methods for parking actions (Behaviors)
    public park(vehicle: Vehicle): void {
        this.isOccupied = true;
        this.parkedVehicle = vehicle;
    }
    public unpark(): void {
        this.isOccupied = false;
        this.parkedVehicle = null;
    }
}