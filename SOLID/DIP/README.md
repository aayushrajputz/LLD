# Dependency Inversion Principle (DIP)

> **"1. High-level modules should not depend on low-level modules. Both should depend on abstractions."**
> **"2. Abstractions should not depend on details. Details should depend on abstractions."**

---

## Simple Version (Aasan Bhasha Mein)
DIP kehta hai ki:
**"Apne classes ko aapas mein itna tight couple mat karo ki ek class ko doosri class ke bina use hi na kiya ja sake. Dono classes ko ek Interface (abstraction) ke through connect karo."**

High-level class (jo main logic chalati hai) ko directly Low-level class (jo specific tool ya service hai) par depend nahi hona chahiye. Dono ko ek common Interface (Rulebook) par depend hona chahiye.

---

## The Analogy: Wall Power Socket 🔌
Soch tere ghar ki diwar mein jo **Power Socket** laga hai. 
*   **DIP Followed:** Socket ek "Interface" hai. Tu usme Laptop Charger, Table Lamp, ya Mobile Charger (Details) kuch bhi plug-in kar sakta hai. Socket ko koi matlab nahi hai ki andar kya plugged hai, jab tak wo standard plug structure ko match kare.
*   **DIP Violated:** Soch agar tera socket direct MacBook ke wire se solder kiya hua hota. Agar kal ko phone charge karna hai, toh tujhe socket khol kar solder badalna padega.

---

## The Problem: Tight Coupling (DIP Violation)

Soch ek online `Store` class hai jo customer ki payment process karne ke liye directly `StripePayment` service ka object create karti hai.

```mermaid
graph TD
    subgraph Bad Design (No DIP - High-level depends on Low-level)
        Store[Store Class] -->|Directly Instantiates 'new Stripe'| Stripe[StripePayment Class]
        Store -.->|Cannot easily switch to PayPal without changing Store code| Stripe
    end

    subgraph Good Design (With DIP - Both depend on Abstraction)
        StoreGood[Store Class] -->|Depends only on| Interface[PaymentProcessor Interface]
        StripeGood[StripeProcessor] ---|implements| Interface
        PayPalGood[PayPalProcessor] ---|implements| Interface
        StoreGood -->|Inject any processor via constructor| Interface
    end
```

---

## File to Implement
File Name: `payment_dip.ts`

### ❌ Bad Practice:
1. Class `StripePayment` banao jiske andar method ho `makePayment(amount: number)`.
2. Class `Store` banao jisme properties ho: `private stripe = new StripePayment()`.
3. `purchase(amount: number)` method banao jo stripe.makePayment() ko call kare.
   *   **Drawback:** Agar PayPal aayi, toh hume `Store` class ke andar variables aur functions ko modify karna padega.

###  Good Practice (DIP Clean):
1. Ek interface banao: `PaymentProcessor` with method signature `pay(amount: number): void`.
2. Do classes banao jo use implements karein:
   - `StripePaymentProcessor`
   - `PayPalPaymentProcessor`
3. `Store` class banao jo constructor ke through dynamically `PaymentProcessor` accept kare:
   ```typescript
   class Store {
       private processor: PaymentProcessor;
       constructor(processor: PaymentProcessor) {
           this.processor = processor;
       }
   }
   ```
4. Objects bana kar PayPal aur Stripe dono pass karke test karo.
