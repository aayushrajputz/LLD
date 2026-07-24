import { Vehicle, VehicleType, ParkingSlot } from "./parking_lot.ts";
import { ParkingFloor } from "./parkingFloor.ts";
import { Ticket } from "./ticket.ts";
import { PricingFactory } from "./PricingStrategy.ts";

export class ParkingLotSystem {
    private floors: ParkingFloor[];
    private ticketSystem: Map<string, Ticket>;

    private static instance: ParkingLotSystem | null = null;

    private constructor() {
        this.floors = [];
        this.ticketSystem = new Map();
    }

    public static getInstance(): ParkingLotSystem {
        if (this.instance === null) {
            this.instance = new ParkingLotSystem();
        }
        return this.instance;
    }

    public addFloor(floor: ParkingFloor): void {
        this.floors.push(floor);
    }

    public parkVehicle(vehicle: Vehicle): Ticket | null {
        for (const floor of this.floors) {
            const slot = floor.getAvailableSlot(vehicle.getVehicleType());
            if (slot) {
                slot.park(vehicle);
                const ticketId = "TICKET_" + Math.random().toString(36).substring(2, 10);
                const ticket = new Ticket(ticketId, vehicle, slot);
                this.ticketSystem.set(ticketId, ticket);
                return ticket;
            }
        }
        return null; // Parking Full!
    }

    public unparkVehicle(ticketId: string): number {
        const ticket = this.ticketSystem.get(ticketId);
        if (!ticket) throw new Error("Invalid Ticket!");

        const entryTime = ticket.getEntryTime();
        const exitTime = new Date();
        const hours = Math.ceil((exitTime.getTime() - entryTime.getTime()) / 3600000) || 1;

        const factory = new PricingFactory();
        const strategy = factory.createPricing(ticket.getVehicle().getVehicleType());
        const amount = strategy.calculateFee(hours);

        ticket.markExit(exitTime, amount);
        ticket.getSlot().unpark();
        return amount;
    }
}

// =============================================
// CLIENT TEST CODE
// =============================================
const system = ParkingLotSystem.getInstance();

// Floor 1 Setup
const floor1 = new ParkingFloor(1);
floor1.addSlot(new ParkingSlot("F1-S1", VehicleType.TWO_WHEELER));
floor1.addSlot(new ParkingSlot("F1-S2", VehicleType.FOUR_WHEELER));
floor1.addSlot(new ParkingSlot("F1-S3", VehicleType.HEAVY_VEHICLE));
system.addFloor(floor1);

// Park a Car
const car = new Vehicle("DL-01-AB-1234", VehicleType.FOUR_WHEELER);
const ticket = system.parkVehicle(car);

if (ticket) {
    console.log("✅ Vehicle Parked! Ticket ID:", ticket.getTicketId());
    console.log("Entry Time:", ticket.getEntryTime());

    // Unpark immediately (ceil will make it 1 hour minimum)
    const fee = system.unparkVehicle(ticket.getTicketId());
    console.log("💰 Parking Fee (1 hr min):", "₹" + fee);
    console.log("Slot Available Again:", !ticket.getSlot().getIsOccupied());
}

// Test Parking Full
console.log("\n--- Testing Parking Full (FourWheeler slot already taken) ---");
const car2 = new Vehicle("MH-02-CD-5678", VehicleType.FOUR_WHEELER);
const ticket2 = system.parkVehicle(car2); // Should work as slot is now free
const car3 = new Vehicle("UP-03-EF-9012", VehicleType.FOUR_WHEELER);
const ticket3 = system.parkVehicle(car3); // Should return null (parking full for FourWheeler)
console.log("Car3 Ticket (should be null):", ticket3);
