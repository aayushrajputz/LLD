import { BookItem } from "./Books.ts";
import { MemberAccount } from "./Account.ts";
import { BookStatus } from "./enums.ts";

export class BookLending {
    private BookItem: BookItem;
    private MemberAccount: MemberAccount;
    private issueDate: Date;
    private dueDate: Date;
    private returnDate: Date | null

    constructor(
        BookItem: BookItem,
        MemberAccount: MemberAccount,
        issueDate: Date,
        dueDate: Date,
        returnDate: Date | null
    ) {
        this.BookItem = BookItem;
        this.MemberAccount = MemberAccount;
        this.issueDate = issueDate;
        this.dueDate = dueDate;
        this.returnDate = returnDate;
    }

    public getBookItem(): BookItem {
        return this.BookItem;
    }
    public getMemberAccount(): MemberAccount {
        return this.MemberAccount;
    }
    public getIssueDate(): Date {
        return this.issueDate;
    }
    public getDueDate(): Date {
        return this.dueDate;
    }
    public getReturnDate(): Date | null {
        return this.returnDate;
    }

    public setReturnDate(returnDate: Date | null) {
        this.returnDate = returnDate;
    }


    public static lendBook(member: MemberAccount, BookItem: BookItem): BookLending {
        const issueDate = new Date();
        const dueDate = new Date();

        dueDate.setDate(issueDate.getDate() + 15)
        BookItem.setStatus(BookStatus.ISSUED)

        member.getBorrowBook().push(BookItem)

        return new BookLending(BookItem, member, issueDate, dueDate, null)
    }

}