# Liskov Substitution Principle (LSP)

> **"If S is a subtype of T, then objects of type T may be replaced with objects of type S without altering any of the desirable properties of the program."**

---

## Simple Version (Kuch samajh nahi aaya? 😂)
LSP ka aasan matlab ye hai:
**"Child class ko apne Parent class ke objects ko bina kisi error ke replace (substitute) karne ki capability honi chahiye."**

Agar tumhare paas ek Parent class ka pointer hai, aur tumne usme Child class ka object daal diya, toh system ko bilkul normal behave karna chahiye. System crash ya unusual behaviour nahi dikhana chahiye.

---

## The Analogy: The Battery Concept 🔋
Soch tere paas ek toy car hai jo normal **AA Battery** se chalti hai.
*   **LSP Followed:** Agar tu normal battery nikal kar uski jagah rechargeable **AA Battery** (subtype/child) daal dega, toh toy car ko abhi bhi normal chalna chahiye.
*   **LSP Violated:** Agar tu rechargeable battery dalta hai par wo thodi moti hai aur fit nahi ho rahi, ya battery insert karte hi car blast ho jati hai — toh ye violation hai. Rechargeable battery standard "AA Battery" interface ko follow nahi kar rahi.

---

## The Classic Violation: The Duck and Electric Duck 🦆
Maan lo humare paas ek class `Duck` hai jiske paas method hai `swim()` aur `fly()`.
Humne ek `ElectricDuck` banayi jo extends karti hai `Duck`.

```typescript
class Duck {
    swim() { console.log("Swimming"); }
    fly() { console.log("Flying"); }
}

class ElectricDuck extends Duck {
    // Electric Duck bina battery ke fly nahi kar sakti!
    fly() {
        if (!this.hasBattery) {
            throw new Error("No battery! Cannot fly!"); // ❌ LSP VIOLATION!
        }
        console.log("Flying electrically");
    }
}
```

**Problem:** Agar humare paas ducks ki list hai aur hum loop chalate hain:
`ducks.forEach(duck => duck.fly())`
Toh jab loop `ElectricDuck` par aayega, program **crash** ho jayega! Hum child class ko parent class ki jagah safely substitute nahi kar paaye.

---

## File to Implement
File Name: `vehicle_lsp.ts`

### ❌ Bad Practice:
1. Class `Vehicle` banao jisme properties/methods hon: `startEngine()`.
2. Class `Car` extends `Vehicle` (LSP Follows - car engine start kar sakti hai).
3. Class `Bicycle` extends `Vehicle`.
   *   **Problem:** Bicycle ke paas engine nahi hota! Agar hum `startEngine()` call karenge, toh bicycle class ko ya toh error throw karna padega (`throw new Error("No engine!")`), ya empty method chhodna padega.
   *   **Violation:** Agar system loop chala raha hai saare vehicles par engine start karne ke liye, toh Bicycle system ko crash kar degi.

###  Good Practice (LSP Clean):
Classes ko unke features ke mutabik split karo:
1. `Vehicle` (Common base - e.g. `move()`).
2. `EngineVehicle` extends `Vehicle` (Adds `startEngine()`).
3. `Car` extends `EngineVehicle`.
4. `Bicycle` extends `Vehicle` (No engine details here, only movement).
