// ==========================================
// SOLID: SINGLE RESPONSIBILITY PRINCIPLE (SRP)
// ==========================================
// Definition: Ek class ke paas badalne ki sirf ek hi wajah honi chahiye (Single responsibility).
// Fayda: Agar DB save karne ka tarika badle, toh calculation logic tutne ka darr zero ho jata hai.
// ❌ BAD PRACTICE: Single class doing multiple things
// invoice class calculations bhi kar rahi hai, console print bhi, aur DB saving bhi.
class invoice {
    bookname: string
    quantity: number
    price: number
    taxRate: number

    constructor(bookname: string, quantiy: number, price: number, taxRate: number) {
        this.bookname = bookname
        this.quantity = quantiy
        this.price = price
        this.taxRate = taxRate
        this.bookname = bookname;
        this.quantity = quantiy;
        this.price = price;
        this.taxRate = taxRate;
    }
    calculateamount() {
        return this.quantity * this.price
        return this.quantity * this.price;
    }
    printInvoice(): void {
        console.log("Invoice Generated for " + this.bookname);
    }
    saveToFile() {
        console.log("Invoice for " + this.bookname + "saved to db");

    }
}
// ========================================================
//  GOOD PRACTICE (SRP Clean): Separating Responsibilities
// 1. Data and Calculation Class
class invoicee {
    bookname: string
    quantity: number
    price: number
    taxRate: number
    constructor(bookname: string, quantiy: number, price: number, taxRate: number) {
        this.bookname = bookname
        this.quantity = quantiy
        this.price = price
        this.taxRate = taxRate
        this.bookname = bookname;
        this.quantity = quantiy;
        this.price = price;
        this.taxRate = taxRate;
    }
    calculateamount() {
        return this.price * this.quantity
    }
    calulateTaxRate() {
        const baseAmount = this.price * this.quantity
        const tax = baseAmount * (this.taxRate / 100);
        return baseAmount + tax
    }
}
// 2. Presentation (Printing) Class
class inVoicePrinter {
    // invoicee object ko as a parameter accept kiya (loose dependency)
    print(invoice: invoicee): void {
        console.log("priniting the Invoice for" + invoice.bookname);
        console.log("prinitng the amount for this invoice:" + invoice.calculateamount());
        console.log("printing the Invoice for: " + invoice.bookname);
        console.log("printing the amount for this invoice: " + invoice.calculateamount());
    }
}
// 3. Persistence (Database/Saving) Class
class InvoiceRepository {
    saveToFile(invoice: invoicee): void {
        console.log("Saving the Invoice for: " + invoice.bookname);
        console.log("Base Amount: " + invoice.calculateamount());
        console.log("Total Amount (with Tax): " + invoice.calulateTaxRate()); // <-- Yahan call kiya!
    }
}


// --- Testing SRP ---
const myInvoice = new invoicee("design patterns", 2, 300, 10);
const printer = new inVoicePrinter();
const repository = new InvoiceRepository();
printer.print(myInvoice);
repository.saveToFile(myInvoice);
