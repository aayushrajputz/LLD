
import { AccountStatus } from "./enums.ts";
import { BookItem } from "./Books.ts";

export abstract class Account {
    private userName: string;
    private userPassword: string;
    private userId: string;
    private status: AccountStatus;

    constructor(userName: string, userPassword: string, userId: string, status: AccountStatus) {
        this.userName = userName;
        this.userPassword = userPassword;
        this.userId = userId;
        this.status = status;
    }
    public getUserName(): string {
        return this.userName;
    }
    public getUserPassword(): string {
        return this.userPassword;
    }
    public getUserId(): string {
        return this.userId;
    }
    public getStatus(): AccountStatus {
        return this.status;
    }
    public setStatus(status: AccountStatus) {
        this.status = status;
    }
    public setUserName(userName: string) {
        this.userName = userName;
    }
    public setUserPassword(userPassword: string) {
        this.userPassword = userPassword;
    }
    public setUserId(userId: string) {
        this.userId = userId;
    }


}
export class LibrarianAccount extends Account {
    constructor(userName: string, userPassword: string, userId: string, status: AccountStatus) {
        super(userName, userPassword, userId, status);
    }


}
export class MemberAccount extends Account {

    private issuedBookCount = 0;
    private readonly MAX_BOOKS_LIMIT = 3;
    private borrowBook: BookItem[] = []

    constructor(userName: string, userPassword: string, userId: string, status: AccountStatus) {
        super(userName, userPassword, userId, status);
    }
    public getIssueBooks(): number {
        return this.borrowBook.length;
    }
    public getMaxBookLimit(): number {
        return this.MAX_BOOKS_LIMIT;
    }
    public getBorrowBook(): BookItem[] {
        return this.borrowBook;
    }

    canIssueBook(BookItem: BookItem): boolean {
        return this.getStatus() === AccountStatus.ACTIVE &&
            this.borrowBook.length < this.MAX_BOOKS_LIMIT &&
            !this.borrowBook.some(book => book.getParentBookref().getISBN() === BookItem.getParentBookref().getISBN());
    }


}   