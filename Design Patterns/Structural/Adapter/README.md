# Adapter Design Pattern (Structural Pattern)

> **"Convert the interface of a class into another interface that clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces."**

---

## Simple Version (Aasan Bhasha Mein)
Adapter pattern ka matlab hai ki **do incompatible (aapas mein fit na hone wali) classes ko ek wrapper (Adapter) ke zariye connect karna** — bina unke original code ko modify kiye.

---

## The Analogy: Phone Charger Travel Adapter 🔌
Tera Indian phone charger (2-pin) hai. Tu US gaya jahan wall socket 3-pin flat hai.
- Tujhe naya charger nahi khareedna hai (original class modify nahi karni).
- Tujhe socket nahi todna hai (client code change nahi karna).
- Tu sirf ek **Travel Adapter** (wrapper) use karega jo dono ke beech bridge ka kaam karega.

**Yahi hai Adapter Pattern.**

---

## Real-World Software Scenario 🖥️
Soch tere paas ek purani legacy `XMLDataFetcher` class hai jo XML format mein data return karti hai. Par teri nayi application ko JSON format mein data chahiye.

- Tu purani class modify nahi kar sakta (wo third-party library mein hai).
- Tu client code change nahi karna chahta.
- **Solution:** Ek `XMLtoJSONAdapter` class banao jo andar se `XMLDataFetcher` use kare aur bahar JSON return kare!

```mermaid
graph LR
    Client[Client Code] -->|expects JSON| Adapter[XMLtoJSONAdapter]
    Adapter -->|internally calls| OldClass[XMLDataFetcher]
    OldClass -->|returns XML| Adapter
    Adapter -->|converts & returns JSON| Client
```

---

## Structure: How to implement Adapter in TypeScript?

1. **Target Interface:** Jo client expect karta hai (e.g. `JsonDataProvider`).
2. **Adaptee:** Purani ya incompatible class (e.g. `XMLDataFetcher`).
3. **Adapter:** New class jo Target Interface implement kare aur internally Adaptee use kare.

---

## File to Implement
File Name: `payment_adapter.ts`

### Task Description:
Soch humari app mein ek nayi `PaymentProcessor` interface hai:
```
interface PaymentProcessor {
    pay(amount: number): void;
}
```
Par humare paas ek purani third-party class hai `OldPaymentGateway` jiske method ka naam alag hai:
```
class OldPaymentGateway {
    makeTransaction(amount: number): void { ... }
}
```
Client sirf `PaymentProcessor` interface ke through payment karna chahta hai.

**Task:**
1. Interface banao `PaymentProcessor` with `pay(amount: number): void`.
2. Class banao `OldPaymentGateway` with `makeTransaction(amount: number): void`.
3. **Adapter class** banao `PaymentAdapter` jo:
   - `PaymentProcessor` interface implement kare.
   - Constructor mein `OldPaymentGateway` ka object accept kare.
   - `pay()` method ke andar internally `oldGateway.makeTransaction()` call kare.
4. Client code mein `PaymentAdapter` use karke payment karo.
