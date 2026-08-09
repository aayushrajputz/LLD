import { BookLending } from "./BookLending.ts";

export class FineCalculator {
    public static calculateFine(BookLending: BookLending, returnDate: Date): number {
        const dueDate = BookLending.getDueDate();

        if (returnDate <= dueDate) {
            return 0
        } else {
            const diffDays = (returnDate.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24)
            return Math.ceil(diffDays) * 10
        }
    }

}