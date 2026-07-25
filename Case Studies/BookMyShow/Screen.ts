import { Seat } from "./seat";

export class Screen {
    private ScreenId: string;
    private name: string;
    private seats: Seat[]

    constructor(ScreenId: string, name: string, seats: Seat[]) {
        this.ScreenId = ScreenId;
        this.name = name;
        this.seats = seats;
    }
    addSeat(seat: Seat) {
        this.seats.push(seat);
    }
    getSeats(): Seat[] {
        return this.seats;
    }

    getScreenId(): string {
        return this.ScreenId;
    }

    getName(): string {
        return this.name;
    }


}