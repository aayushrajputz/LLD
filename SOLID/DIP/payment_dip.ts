// ==========================================
// SOLID: DEPENDENCY INVERSION PRINCIPLE (DIP)
// ==========================================
// Definition: 
// 1. High-level modules (jaise Store) ko low-level modules (jaise Stripe) par 
//    direct depend nahi hona chahiye. Dono ko abstraction (interface) par depend hona chahiye.
// 2. Abstractions should not depend on details. Details should depend on abstractions.

// ❌ BAD PRACTICE: Tight Coupling
// Store class directly "StripePaymentt" class par depend kar rahi hai.
class StripePaymentt {
    makePayment(amount: number) {
        console.log(`using stripe payment  of rs ${amount} done`);
    }
}

// ========================================================

//  GOOD PRACTICE (DIP Clean): Loose Coupling using Dependency Injection

// 1. Abstraction (Common Interface)
interface paymentProcessor {
    pay(amount: number): void;
}

// 2. Low-level module implementing the Abstraction (Stripe)
class StripePayment implements paymentProcessor {
    pay(amount: number): void {
        console.log(`using stripe payment  of rs ${amount} done`);
    }
}

// 3. Low-level module implementing the Abstraction (Paytm)
class Paytmm implements paymentProcessor {
    pay(amount: number): void {
        console.log(`using paytm payment  of rs ${amount} done`);
    }
}

// 4. High-level module depends ONLY on Abstraction (paymentProcessor)
class GoodStore {
    private processor: paymentProcessor; // Dependency is inverted through interface

    // Injecting the dependency via constructor (Dependency Injection)
    constructor(processor: paymentProcessor) {
        this.processor = processor;
    }

    purchase(amount: number) {
        this.processor.pay(amount);
    }
}

// --- Testing DIP ---
// We can plug in any payment processor we want dynamically!
const stripeStore = new GoodStore(new StripePayment());
stripeStore.purchase(500);

const paytmStore = new GoodStore(new Paytmm());
paytmStore.purchase(1000);
