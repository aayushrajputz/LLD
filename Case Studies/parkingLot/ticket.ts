import { Vehicle, ParkingSlot } from "./parking_lot.ts";

export class Ticket {
    private ticketId: string;
    private vehicle: Vehicle;
    private slot: ParkingSlot;
    private entryTime: Date;
    private exitTime: Date | null;
    private amount: number;

    constructor(ticketId: string, vehicle: Vehicle, slot: ParkingSlot) {
        this.ticketId = ticketId;
        this.vehicle = vehicle;
        this.slot = slot;
        this.entryTime = new Date();
        this.exitTime = null; // Exit time initially null hoga jab tak vehicle exit na kare
        this.amount = 0;      // Amount starting mein 0 hoga
    }

    // Getters
    public getTicketId(): string {
        return this.ticketId;
    }

    public getVehicle(): Vehicle {
        return this.vehicle;
    }

    public getSlot(): ParkingSlot {
        return this.slot;
    }

    public getEntryTime(): Date {
        return this.entryTime;
    }

    public getExitTime(): Date | null {
        return this.exitTime;
    }

    public getAmount(): number {
        return this.amount;
    }

    // Setters (Jo exit ke waqt update honge)
    public markExit(exitTime: Date, amount: number): void {
        this.exitTime = exitTime;
        this.amount = amount;
    }
}
