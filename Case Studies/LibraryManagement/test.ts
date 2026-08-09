import { Library } from "./Library.ts";
import { Book, BookItem } from "./Books.ts";
import { MemberAccount } from "./Account.ts";
import { SearchByTitle } from "./SearchStrategy.ts";
import { AccountStatus, BookStatus } from "./enums.ts";


const library = Library.getInstance()

const member1 = new MemberAccount("Aayush", "aayush@123", "1", AccountStatus.ACTIVE)
const member2 = new MemberAccount("Akash", "akash@123", "2", AccountStatus.FROZEN)


library.registerMember(member1)
library.registerMember(member2)


const book1 = new Book("1", "The great gatsby", "F. Scott Fitzgerald")
const book2 = new Book("2", "To Kill a Mockingbird", "Harper Lee")
const book3 = new Book("3", "1984", "George Orwell")



// 1. Create BookItems (copies)
const item1 = new BookItem("BC1", BookStatus.AVAILABLE, 101, book1);
const item2 = new BookItem("BC2", BookStatus.AVAILABLE, 102, book1);
const item3 = new BookItem("BC3", BookStatus.AVAILABLE, 103, book2);

library.addBookItem(item1);
library.addBookItem(item2);
library.addBookItem(item3);

console.log("\n--- STARTING SIMULATION TESTS ---");

// Test 1: Active Member checkout (Should succeed)
console.log("Test 1: Checkout BC1 for Member 1: ", library.checkOutBook("1", "BC1")); // Expected: true

// Test 2: Double check duplicate book check (Should fail because Aayush already has gatsby)
console.log("Test 2: Checkout duplicate book (Gatsby BC2) for Member 1: ", library.checkOutBook("1", "BC2")); // Expected: false

// Test 3: Frozen Member checkout check (Should fail)
console.log("Test 3: Checkout BC3 for Frozen Member 2: ", library.checkOutBook("2", "BC3")); // Expected: false

// Test 4: Return Book (Should succeed)
console.log("Test 4: Return Gatsby BC1: ", library.returnBook("BC1")); // Expected: true

// Test 5: Checkout duplicate Gatsby again (Should now succeed because Gatsby BC1 is returned)
console.log("Test 5: Checkout Gatsby BC2 for Member 1 after returning BC1: ", library.checkOutBook("1", "BC2")); // Expected: true
