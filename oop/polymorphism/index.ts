// ==========================================
// PILLAR 4: POLYMORPHISM (Method Overriding)
// ==========================================
// Poly = Many, Morph = Forms.
// Ek hi function name, par alag-alag behavior.
// LLD mein subse important Polymorphism ka concept hai "Method Overriding" (Runtime Polymorphism).

// Base Parent Class
class Vechile {
    startEngine(): void {
        console.log("engine started for vechile");
    }
}

// Child Class 1: car inherits Vechile but overrides startEngine()
class car extends Vechile {
    // Override: Parent ke startEngine ko custom version se overwrite kiya
    startEngine(): void {
        console.log("engine started for car");
    }
}

// Child Class 2: truck inherits Vechile but overrides startEngine()
class truck extends Vechile {
    // Override: Truck ka custom roar starting behavior
    startEngine(): void {
        console.log("engine started for truck");
    }
}

// Normal instantiation and execution
const myCar = new car();
const myTruck = new truck();

myCar.startEngine();  // Output: engine started for car
myTruck.startEngine(); // Output: engine started for truck


// ========================================================
// SUPERPOWER OF POLYMORPHISM: Generalized Processing (LLD)
// ========================================================
// Yahan humne ek array banaya jiska type "Vechile[]" hai.
// Iske andar car aur truck dono instances stored hain.
const garage: Vechile[] = [new car(), new truck()];

// Loop chala rahe hain.
// Compile-time par compiler ko lagta hai 'vechile' normal Vechile type hai.
// Lekin RUNTIME par, JS engine automatic pehchan leta hai ki ye car hai ya truck,
// aur unka overridden version of startEngine() trigger karta hai!
garage.forEach((vechile) => {
    vechile.startEngine(); // output: car engine then truck engine
});

// Fayda: Agar future mein hum "bike" class add karenge, 
// toh ye garage loop code bilkul badalne ki zaroorat nahi padegi! It is open for extension.
