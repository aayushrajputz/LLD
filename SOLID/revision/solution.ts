// ========================================================
// SOLID REFACTORING SOLUTION
// ========================================================

// 1. Dependency Inversion: Database Interface (Abstraction)
interface Database {
    saveOrder(orderId: number): void;
}

// Low-level database detail implementing abstraction
class MySQLDatabase implements Database {
    saveOrder(orderId: number): void {
        console.log(`Saving order ${orderId} to MySQL Database.`);
    }
}

// 2. Open/Closed: Discount Strategy Interface & Concrete Classes
interface DiscountStrategy {
    calulate(price: number): number;
}

class DiwaliDiscount implements DiscountStrategy {
    calulate(price: number): number {
        return price * 0.8; // 20% Discount
    }
}

class NewYearDiscount implements DiscountStrategy {
    calulate(price: number): number {
        return price * 0.9; // 10% Discount
    }
}

class NoDiscount implements DiscountStrategy {
    calulate(price: number): number {
        return price; // No Discount
    }
}

// 3. Interface Segregation & Liskov Substitution: Separate Interfaces
interface Order {
    processOrder(): void;
}

interface Shippable {
    ship(): void;
}

// 4. Concrete Order Class 1: Physical Order (Shippable and processable)
class PhysicalOrder implements Order, Shippable {
    private db: Database; // DIP: Depends on Interface
    private discount: DiscountStrategy; // OCP: Depends on strategy interface

    constructor(db: Database, discount: DiscountStrategy) {
        this.db = db;
        this.discount = discount;
    }

    processOrder(): void {
        console.log("Processing physical order...");
        this.db.saveOrder(101);
    }

    ship(): void {
        console.log("Shipping physical product...");
        this.db.saveOrder(101);
    }
}

// 5. Concrete Order Class 2: Digital Order (Only processable, not shippable)
// ISP: Not forced to implement Shippable. LSP: No invalid ship() method throwing errors.
class DigitalOrder implements Order {
    private db: Database;
    private discount: DiscountStrategy;

    constructor(db: Database, discount: DiscountStrategy) {
        this.db = db;
        this.discount = discount;
    }

    processOrder(): void {
        console.log("Processing digital order...");
        this.db.saveOrder(102);
    }
}

// ========================================================
// --- Testing Clean SOLID Design ---
// ========================================================
const db = new MySQLDatabase();

console.log("--- Testing Physical Order ---");
const myPhysicalOrder = new PhysicalOrder(db, new DiwaliDiscount());
myPhysicalOrder.processOrder();
myPhysicalOrder.ship(); // Safe and valid

console.log("\n--- Testing Digital Order ---");
const myDigitalOrder = new DigitalOrder(db, new NewYearDiscount());
myDigitalOrder.processOrder(); // Safe download, no shipping methods exposed!
