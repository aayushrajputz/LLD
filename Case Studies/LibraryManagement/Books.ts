import { BookStatus } from "./enums.ts";

export class Book {
    private ISBN: string;
    private title: string;
    private author: string;

    constructor(
        ISBN: string,
        title: string,
        author: string,
    ) {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
    }

    public getISBN(): string {
        return this.ISBN;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public setISBN(ISBN: string): void {
        this.ISBN = ISBN;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public setAuthor(author: string): void {
        this.author = author
    }
}

export class BookItem {
    private Barcode: string;
    private status: BookStatus;
    private rackNumber: number;
    private parentBookref: Book;

    constructor(
        Barcode: string,
        status: BookStatus,
        rackNumber: number,
        parentBookref: Book,
    ) {
        this.Barcode = Barcode;
        this.status = status;
        this.rackNumber = rackNumber;
        this.parentBookref = parentBookref;
    }

    public getBarcode(): string {
        return this.Barcode;
    }

    public getStatus(): BookStatus {
        return this.status;
    }

    public getRackNumber(): number {
        return this.rackNumber;
    }

    public getParentBookref(): Book {
        return this.parentBookref;
    }

    public setStatus(status: BookStatus): void {
        this.status = status;
    }

    public setRackNumber(rackNumber: number): void {
        this.rackNumber = rackNumber;
    }
}