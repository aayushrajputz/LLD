import { Book, BookItem } from "./Books.ts";
import { FineCalculator } from "./FineCalculator.ts";
import { MemberAccount } from "./Account.ts";
import { BookLending } from "./BookLending.ts";
import { SearchStrategy } from "./SearchStrategy.ts";
import { BookStatus } from "./enums.ts";


export class Library {
    private bookItems = new Map<string, BookItem>()
    private members = new Map<string, MemberAccount>
    private activeLendings = new Map<string, BookLending>

    private static instance: Library | null = null;

    private constructor() {

    }


    public static getInstance(): Library {
        if (!Library.instance) {
            Library.instance = new Library();
        }
        return Library.instance;
    }
    public registerMember(member: MemberAccount): void {
        this.members.set(member.getUserId(), member);
        console.log("Member registered successfully");

    }
    public addBookItem(bookItem: BookItem): void {
        this.bookItems.set(bookItem.getBarcode(), bookItem)
        console.log("Book Item added successfully");

    }
    public removeBookItem(barcode: string): void {
        this.bookItems.delete(barcode)
        console.log("Book Item removed successfully");

    }

    public searchBooks(strategy: SearchStrategy, query: string): BookItem[] {
        const booksArray = [...this.bookItems.values()]
        return strategy.searchBook(booksArray, query)
    }
    checkOutBook(memberId: string, barcode: string): boolean {
        const member = this.members.get(memberId);
        const book = this.bookItems.get(barcode);

        if (!member || !book) {
            console.log("member or book not found");
            return false
        }
        if (book.getStatus() !== BookStatus.AVAILABLE) {
            console.log("Book is not available for you ");
            return false;
        }
        if (!member.canIssueBook(book)) {
            console.log("You already have a copy of this book ");
            return false
        }

        const lending = BookLending.lendBook(member, book);
        if (lending) {
            this.activeLendings.set(barcode, lending)
            return true
        }
        return false

    }
    returnBook(barcode: string): boolean {
        const lending = this.activeLendings.get(barcode)
        if (lending) {
            const fine = FineCalculator.calculateFine(lending, new Date())
            if (fine > 0) {
                console.log("fine collected" + fine);

            }
            lending.returnBook()
            this.activeLendings.delete(barcode)
            return true
        }
        return false
    }
}


