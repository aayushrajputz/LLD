import { Seat } from "./seat.ts";
import { Theater } from "./theater.ts";

export class Screen {
    private screenId: string;
    private name: string;
    private seats: Seat[];
    private theatre: Theater | null = null;

    constructor(screenId: string, name: string) {
        this.screenId = screenId;
        this.name = name;
        this.seats = [];
    }

    setTheatre(theatre: Theater): void {
        this.theatre = theatre;
    }

    getTheatreCity(): string {
        return this.theatre ? this.theatre.getCity() : "";
    }

    addSeat(seat: Seat): void {
        this.seats.push(seat);
    }

    getSeats(): Seat[] {
        return this.seats;
    }

    getScreenId(): string {
        return this.screenId;
    }

    getName(): string {
        return this.name;
    }
}