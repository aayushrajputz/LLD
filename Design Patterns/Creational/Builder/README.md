# Builder Design Pattern (Creational Pattern)

> **"Separate the construction of a complex object from its representation so that the same construction process can create different representations."**

---

## Simple Version (Aasan Bhasha Mein)
Builder pattern ka use tab kiya jata hai jab **ek object banane ke liye bohot saare parameters** chahiye hote hain (jinme se kuch optional hote hain). 

Ek bada constructor banakar usme `null, null, true, null` pass karne ke bajay, hum step-by-step (chaining ke through) object ko build karte hain aur end mein `.build()` call karke final object ready karte hain.

---

## The Analogy: Subway Sandwich Customization 🥖
Jab tu Subway par jata hai, tu direct "Sandwich" nahi bolta. Tu artist (Builder) ko step-by-step instructions deta hai:
1. "Wheat Bread daalo."
2. "Cheese slice add karo."
3. "Olives aur Capsicum daalo."
4. "Sweet Onion sauce daalo."
5. "Done! Ab ise pack kar do (Build)."

Isse har customer apni pasand ka customized sandwich bana sakta hai bina kisi confusion ke.

---

## The Problem: Telescoping Constructor ❌
Maan lo hume ek `DesktopComputer` class banani hai jisme 10 fields hain.

```typescript
// Constructor without Builder looks ugly and error-prone:
const myPC = new Computer("Intel i7", "16GB", "1TB SSD", null, null, true, null, true);
```
Ye readable nahi hai. Kis position par kya parameter pass ho raha hai, ye yaad rakhna mushkil hai.

---

## The Solution: Method Chaining (Builder Design) 
Hum setter methods banate hain jo **`this`** (builder object itself) return karte hain taaki hum methods ko chain kar sakein:

```typescript
const myGamingPC = new ComputerBuilder()
    .setCPU("Ryzen 9")
    .setRAM("32GB")
    .setStorage("2TB SSD")
    .setGraphicsCard("RTX 4090") // Optional
    .build(); // Returns final Computer object
```

---

## File to Implement
File Name: `computer_builder.ts`

### Task Description:
1. Ek class banao **`Computer`** jiske fields ho:
   - `cpu: string` (Required)
   - `ram: string` (Required)
   - `storage: string` (Required)
   - `graphicsCard: string` (Optional)
   - `hasWiFi: boolean` (Optional)
2. Ek class banao **`ComputerBuilder`** jiske paas:
   - Same fields ho (kuch defaults ke sath).
   - Methods: `setCPU(cpu)`, `setRAM(ram)`, `setStorage(storage)`, `setGraphicsCard(card)`, `setWiFi(wifi)`.
   - **Important:** Har setter method ke end mein `return this;` hona chahiye.
   - Method `build(): Computer` jo returns kare `new Computer(this)`.
3. Constructor of `Computer` should accept the `ComputerBuilder` object and copy the values.
4. Client code mein ek **Office PC** (without GPU/WiFi) aur ek **Gaming PC** (with GPU/WiFi) build karke console log karo.
