# Decorator Design Pattern (Structural Pattern)

> **"Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality."**

---

## Simple Version (Aasan Bhasha Mein)
Decorator pattern ka use tab hota hai jab hume **kisi existing object ki functionality ko runtime par dynamically extend (add)** karna ho — bina uski original class ko modify kiye aur bina naya subclass banaye.

Hum ek **wrapper class** banate hain jo original object ko wrap karti hai aur uski functionality ke upar apna extra behavior add karti hai.

---

## The Analogy: Coffee Shop ☕
Soch tu coffee shop par gaya. Base item hai plain **Coffee** (Rs. 50).
- Tu bolta hai "Milk add karo" → `MilkDecorator` wraps Coffee (Rs. 50 + Rs. 10 = Rs. 60)
- Tu bolta hai "Sugar bhi add karo" → `SugarDecorator` wraps MilkCoffee (Rs. 60 + Rs. 5 = Rs. 65)
- Tu bolta hai "Whipped Cream bhi" → `WhipDecorator` wraps that (Rs. 65 + Rs. 15 = Rs. 80)

Har ek addition pichle object ko **wrap** karta hai. Original Coffee class ko tune touch nahi kiya!

---

## Why NOT use Inheritance here?
Agar hum inheritance use karte, toh hume ye saari subclasses banani padti:
- `CoffeeWithMilk`
- `CoffeeWithSugar`
- `CoffeeWithMilkAndSugar`
- `CoffeeWithMilkAndSugarAndWhip`

4 combinations ke liye 4 subclasses! 10 toppings ke liye = **1024 subclasses!** 🤯

Decorator pattern mein sirf ek-ek **Decorator class** banao aur unhe jitna chahiye utna chain karo.

---

## Structure

```
Component Interface: Coffee (getDescription, getCost)
       ↑ implements
ConcreteComponent: SimpleCoffee
       ↑ wraps
BaseDecorator: CoffeeDecorator (holds a Coffee reference)
       ↑ extends
ConcreteDecorators: MilkDecorator, SugarDecorator, WhipDecorator
```

---

## File to Implement
File Name: `coffee_decorator.ts`

### Task Description:
1. Interface banao **`Coffee`** with:
   - `getDescription(): string`
   - `getCost(): number`
2. Concrete base class **`SimpleCoffee`** implements `Coffee`:
   - description: "Simple Coffee", cost: 50
3. Abstract Decorator class **`CoffeeDecorator`** implements `Coffee`:
   - Constructor mein `Coffee` object accept karo (wrapped coffee).
   - Methods delegate to the wrapped coffee.
4. Concrete Decorators:
   - **`MilkDecorator`** extends `CoffeeDecorator` — adds "+ Milk" to description, +10 to cost.
   - **`SugarDecorator`** extends `CoffeeDecorator` — adds "+ Sugar" to description, +5 to cost.
5. Client code mein chain karo:
   ```typescript
   let myCoffee: Coffee = new SimpleCoffee();
   myCoffee = new MilkDecorator(myCoffee);
   myCoffee = new SugarDecorator(myCoffee);
   console.log(myCoffee.getDescription()); // Simple Coffee + Milk + Sugar
   console.log(myCoffee.getCost());        // 65
   ```
