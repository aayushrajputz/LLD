# Interface Segregation Principle (ISP)

> **"Clients should not be forced to depend upon interfaces that they do not use."**

---

## Simple Version (Aasan bhasha mein)
ISP ka matlab hai:
**"Ek bada interface banane ke bajay, chhote-chhote aur specific interfaces banao, taaki kisi class ko aise methods implement na karne padein jinse uska koi matlab hi nahi hai."**

Agar tumne ek single interface mein 10 methods daal diye, toh jo class use implement karegi use saare 10 ke 10 methods zabardasti define karne padenge, chahe use unki zaroorat ho ya na ho.

---

## The Analogy: Universal Remote vs Specific Buttons 📺
Maan lo tumne ek universal remote banaya jisme TV, AC, Washing Machine aur Car start karne ke buttons hain.
*   **ISP Violation:** Agar koi TV use karna chahta hai, toh use AC aur Washing Machine ke methods ko bhi handle karna pad raha hai apne remote interface mein.
*   **ISP Clean:** TV ke liye alag remote interface, AC ke liye alag remote interface. Client wahi remote use karega jiske buttons se uska kaam ho.

---

## The Classic Violation: The Smart Worker 🤖
Maan lo humare paas ek interface `Worker` hai:

```typescript
interface Worker {
    work(): void;
    eat(): void;
}
```

Humne do classes banayi:
1. `HumanWorker`: implements `Worker` (works and eats - follows rules).
2. `RobotWorker`: implements `Worker` (works, but **does not eat!**).

**Problem:** `RobotWorker` ko zabardasti `eat()` method implement karna padega aur uske andar khali space chhodna padega ya error throw karna padega. Ye ISP ka direct violation hai.

---

## File to Implement
File Name: `worker_isp.ts`

### ❌ Bad Practice:
1. Ek interface banao `Worker` jisme methods hon: `work(): void`, `eat(): void`.
2. Class `Human` implements `Worker` (normal behave karegi).
3. Class `Robot` implements `Worker` (eat ke andar throw error karegi).

###  Good Practice (ISP Clean):
Interface ko break karke do specific interfaces banao:
1. `Workable` jisme method ho: `work(): void`.
2. `Eatable` jisme method ho: `eat(): void`.
3. `Human` implements `Workable`, `Eatable` (dono implements kar sakta hai).
4. `Robot` implements `Workable` (only work, no need to worry about eating!).
