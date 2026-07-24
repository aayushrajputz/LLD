import { ParkingSlot } from "./parking_lot";
import { VehicleType } from "./parking_lot";

export class ParkingFloor {
    private floorNumber: number;
    private slots: ParkingSlot[];

    constructor(floorNumber: number) {
        this.floorNumber = floorNumber;
        this.slots = [];
    }

    addSlot(slot: ParkingSlot): void {
        this.slots.push(slot);
    }
    getFloorNumber(): number {
        return this.floorNumber;
    }

    // Ek floor ke andhar hi slots hain, toh floor number check double karne ki need nahi hai
    getAvailableSlot(vehicleType: VehicleType): ParkingSlot | null {
        return this.slots.find(slot => !slot.getIsOccupied() && slot.getSlotType() === vehicleType) || null;
    }
}

