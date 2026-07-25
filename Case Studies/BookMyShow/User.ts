import { Booking } from "./Booking"
export class User {
    private userId: string
    private name: string
    private booking: Booking[] = []
    private email: string

    constructor(userId: string, name: string, email: string) {
        this.userId = userId
        this.name = name
        this.email = email
    }

    addBooking(booking: Booking): void {
        this.booking.push(booking)
    }
    getUserId(): string {
        return this.userId
    }
    getName(): string {
        return this.name
    }
    getBooking(): Booking[] {
        return this.booking
    }
    getEmail(): string {
        return this.email
    }
}