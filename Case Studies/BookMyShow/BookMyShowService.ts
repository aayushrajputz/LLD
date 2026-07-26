import { User } from "./User.ts";
import { Movie } from "./movie.ts";
import { Show } from "./Show.ts";
import { Booking } from "./Booking.ts";
import { Theater } from "./theater.ts";
import { ShowSeat } from "./ShowSeat.ts";
import { SeatStatus } from "./enums.ts";
import { PaymentFactory } from "./Payment.ts";

export class BookMyShowService {
    private theaters: Theater[] = [];
    private movies: Movie[] = [];
    private shows: Show[] = [];
    private bookings: Map<string, Booking> = new Map();

    private static instance: BookMyShowService | null = null;

    private constructor() { }

    public static getInstance(): BookMyShowService {
        if (BookMyShowService.instance === null) {
            BookMyShowService.instance = new BookMyShowService();
        }
        return BookMyShowService.instance;
    }

    // --- Add Methods ---
    public addTheater(theater: Theater): void {
        this.theaters.push(theater);
    }

    public addMovie(movie: Movie): void {
        this.movies.push(movie);
    }

    public addShow(show: Show): void {
        this.shows.push(show);
    }

    // --- Search ---
    public searchShows(city: string, movieTitle: string): Show[] {
        return this.shows.filter(show =>
            show.getScreen().getTheatreCity() === city &&
            show.getMovie().getTitle()
        );
    }

    // --- Lock Seats (Before Payment) ---
    public selectAndLockSeats(show: Show, seatIds: string[]): boolean {
        const showSeats: ShowSeat[] = [];

        // Pehle check karo ki saari seats AVAILABLE hain ya nahi
        for (const seatId of seatIds) {
            const showSeat = show.getShowSeat(seatId);
            if (!showSeat || showSeat.getStatus() !== SeatStatus.AVAILABLE) {
                return false; // Koi bhi seat unavailable hai toh lock fail
            }
            showSeats.push(showSeat);
        }

        // Saari available hain toh lock karo
        showSeats.forEach(seat => seat.lock());
        return true;
    }

    // --- Create Booking ---
    public createBooking(show: Show, seatIds: string[], user: User): Booking {
        const showSeats: ShowSeat[] = seatIds
            .map(id => show.getShowSeat(id))
            .filter(seat => seat !== undefined) as ShowSeat[];

        const bookingId = "BMS_" + Math.random().toString(36).substring(2, 10).toUpperCase();
        const booking = new Booking(bookingId, show, showSeats);
        this.bookings.set(bookingId, booking);
        user.addBooking(booking);
        return booking;
    }

    // --- Process Payment & Confirm / Cancel ---
    public confirmPayment(booking: Booking, paymentType: string): void {
        const factory = new PaymentFactory();
        const strategy = factory.getPayment(paymentType);
        const isSuccess = strategy.pay(booking.getTotalAmount());

        if (isSuccess) {
            booking.confirmBooking();
            console.log(`✅ Booking ${booking.getBookingId()} CONFIRMED!`);
        } else {
            booking.cancelBooking();
            console.log(`❌ Booking ${booking.getBookingId()} CANCELLED! Payment failed.`);
        }
    }
}

// =============================================
// CLIENT TEST CODE
// =============================================
import { Screen } from "./screen.ts";
import { Seat } from "./seat.ts";
import { SeatCategory } from "./enums.ts";

const service = BookMyShowService.getInstance();

// 1. Setup Movie
const movie = new Movie("M1", "Inception", 148);
service.addMovie(movie);

// 2. Setup Screen + Seats
const screen = new Screen("SC1", "Screen 1");
screen.addSeat(new Seat("S1", 1, 1, SeatCategory.SILVER));
screen.addSeat(new Seat("S2", 1, 2, SeatCategory.GOLD));
screen.addSeat(new Seat("S3", 1, 3, SeatCategory.PLATINUM));

// 3. Setup Theater
const theater = new Theater("T1", "PVR Cinemas", "Delhi");
theater.addScreen(screen);
service.addTheater(theater);

// 4. Setup Show
const show = new Show("SH1", movie, screen, new Date("2026-07-26T18:00:00"));
service.addShow(show);

// 5. Create User
const user = new User("U1", "Aayush", "aayush@gmail.com");

// 6. Search Shows
const results = service.searchShows("Delhi", "Inception");
console.log(`\n🎬 Shows found: ${results.length}`);

// 7. Lock Seats
const seatIds = ["S1", "S2"];
const locked = service.selectAndLockSeats(show, seatIds);
console.log(`🔒 Seats locked: ${locked}`);

// 8. Create Booking
const booking = service.createBooking(show, seatIds, user);
console.log(`🎫 Booking created: ${booking.getBookingId()}`);
console.log(`💰 Total Amount: ₹${booking.getTotalAmount()}`);

// 9. Confirm Payment
service.confirmPayment(booking, "UPI");
console.log(`📋 Booking Status: ${booking.getStatus()}`);
