// ========================================================
// SOLID ULTIMATE REVISION CHALLENGE
// ========================================================
// Is code mein S, O, L, I, aur D paanchon principles violate ho rahe hain.
// Isko achhe se padho aur samajho ki kahan kya violation hai.

// 1. Database Connection (Low-level detail)
class MySQLDatabase {
    saveOrder(orderId: number) {
        console.log(`Saving order ${orderId} to MySQL Database.`);
    }
}

// 2. Bad Interface containing too many unrelated operations
interface OrderOperations {
    createOrder(): void;
    calculateDiscount(): void;
    printReceipt(): void;
    shipProduct(): void; // Robots can do this, but digital downloads don't need shipping!
}

// 3. Simple Order Class violating multiple principles
class OrderProcessingSystem implements OrderOperations {
    private db = new MySQLDatabase(); // Direct instantiation (DIP violation)
    private orderType: string;

    constructor(orderType: string) {
        this.orderType = orderType;
    }

    createOrder() {
        console.log("Order created.");
        this.db.saveOrder(101); // SRP violation (DB saving inside order system)
    }

    calculateDiscount() {
        // OCP Violation: Agar naya festival discount aayega, toh ye method bar-bar modify hoga
        if (this.orderType === "DIWALI") {
            console.log("Applying 20% discount.");
        } else if (this.orderType === "NEWYEAR") {
            console.log("Applying 10% discount.");
        }
    }

    printReceipt() {
        console.log("Printing receipt to console."); // SRP violation (Printing logic here)
    }

    shipProduct() {
        // LSP & ISP Violation: Digital products ke liye shipping fail ho jayegi
        if (this.orderType === "DIGITAL") {
            throw new Error("Digital products cannot be physically shipped!"); // Program crash!
        }
        console.log("Shipping physical product.");
    }
}

// --- Client Execution ---
const physicalOrder = new OrderProcessingSystem("PHYSICAL");
physicalOrder.createOrder();
physicalOrder.calculateDiscount();
physicalOrder.printReceipt();
physicalOrder.shipProduct();

console.log("-------------------");

const digitalOrder = new OrderProcessingSystem("DIGITAL");
digitalOrder.createOrder();
digitalOrder.calculateDiscount();
digitalOrder.printReceipt();
// Warning: This will crash the system!
digitalOrder.shipProduct(); 
