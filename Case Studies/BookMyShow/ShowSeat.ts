import { Seat } from "./Seat.ts";
import { SeatStatus } from "./enums.ts";

export class ShowSeat {
    private seat: Seat;
    private status: SeatStatus;
    private price: number;

    constructor(seat: Seat, price: number) {
        this.seat = seat;
        this.price = price;
        this.status = SeatStatus.AVAILABLE;
    }

    public getSeat(): Seat { return this.seat; }
    public getStatus(): SeatStatus { return this.status; }
    public getPrice(): number { return this.price; }

    public lock(): void {
        if (this.status !== SeatStatus.AVAILABLE) {
            throw new Error("Seat is not available to lock!");
        }
        this.status = SeatStatus.LOCKED;
    }

    public book(): void {
        if (this.status !== SeatStatus.LOCKED) {
            throw new Error("Seat must be locked before booking!");
        }
        this.status = SeatStatus.BOOKED;
    }

    public unlock(): void {
        this.status = SeatStatus.AVAILABLE;
    }
}
