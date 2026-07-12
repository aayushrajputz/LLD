// ========================================================
// STRATEGY DESIGN PATTERN (BEHAVIORAL)
// ========================================================
// Definition: Family of algorithms (UPI, Card) ko encapsulate karke 
// runtime par interchangeability support karna.
// Enforces: Open/Closed Principle (OCP) & Dependency Inversion Principle (DIP).

// 1. Strategy Common Interface
interface PaymentStrategy {
    pay(amount: number): void;
}

// 2. Concrete Strategy A (UPI)
class UPIPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using UPI`);
    }
}

// 3. Concrete Strategy B (Card)
class CardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using Card`);
    }
}

// 4. Context Class (The client facing class that uses strategies)
class ShoppingCart {
    private paymentStratgey: PaymentStrategy;

    // Supports Constructor Injection
    constructor(paymentStratgey: PaymentStrategy) {
        this.paymentStratgey = paymentStratgey;
    }

    // Supports Setter Injection (Runtime Switching)
    setPaymentStrategy(paymentStratgey: PaymentStrategy): void {
        this.paymentStratgey = paymentStratgey
    }

    checkout(amount: number): void {
        this.paymentStratgey.pay(amount)
    }
}

// ========================================================
// --- Client Code (Using Strategy Pattern) ---
// ========================================================
const upiPayment = new UPIPayment();
const cardPayment = new CardPayment();

// Initialize cart with UPI
const shoppingCart = new ShoppingCart(upiPayment);
shoppingCart.checkout(100);

// Swap strategy dynamically to Card and checkout again
shoppingCart.setPaymentStrategy(cardPayment);
shoppingCart.checkout(200);
