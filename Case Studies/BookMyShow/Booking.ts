import { Show } from "./Show.ts"
import { ShowSeat } from "./ShowSeat.ts"
import { BookingStatus } from "./enums.ts"

export class Booking {
    private bookingId: string
    private show: Show
    private seat: ShowSeat[]
    private status: BookingStatus
    private totalAmount: number

    constructor(bookingId: string, show: Show, seat: ShowSeat[]) {
        this.bookingId = bookingId
        this.show = show
        this.seat = seat
        this.status = BookingStatus.PENDING
        this.totalAmount = 0

        this.totalAmount = this.seat.reduce((totalAmount, seat) => (totalAmount + seat.getPrice()), 0)

    }
    confirmBooking(): void {
        this.status = BookingStatus.CONFIRMED
        this.seat.forEach(seat => seat.book())
    }
    cancleBooking(): void {
        this.status = BookingStatus.CANCELLED
        this.seat.forEach(seat => seat.unlock())
    }
    getBookingId(): string {
        return this.bookingId
    }
    getShow(): Show {
        return this.show
    }
    getSeats(): ShowSeat[] {
        return this.seat
    }
    getStatus(): BookingStatus {
        return this.status
    }
    getTotalAmount(): number {
        return this.totalAmount
    }


}