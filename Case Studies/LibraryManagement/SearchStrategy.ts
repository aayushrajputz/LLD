import { BookItem } from "./Books.ts";

export interface SearchStrategy {
    searchBook(books: BookItem[], query: string): BookItem[];


}

export class SearchByBarcode implements SearchStrategy {
    searchBook(books: BookItem[], query: string): BookItem[] {
        console.log("Searching by Barcode");
        return books.filter(book => book.getBarcode() === query);
    }
}

export class SearchByTitle implements SearchStrategy {
    searchBook(books: BookItem[], query: string): BookItem[] {
        console.log("Searching by title");
        return books.filter(book => book.getParentBookref().getTitle().toLowerCase().includes(query.toLowerCase()));
    }
}

export class SearchByAuthor implements SearchStrategy {
    searchBook(books: BookItem[], query: string): BookItem[] {
        console.log("Searching by author");
        return books.filter(book => book.getParentBookref().getAuthor().toLowerCase().includes(query.toLowerCase()));
    }
}

export class SearchByISBN implements SearchStrategy {
    searchBook(books: BookItem[], query: string): BookItem[] {
        console.log("Searching by ISBN");
        return books.filter(book => book.getParentBookref().getISBN().toLowerCase().includes(query.toLowerCase()));
    }
}







