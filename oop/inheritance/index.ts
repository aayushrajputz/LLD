// ==========================================
// PILLAR 3: INHERITANCE (Code Reusability)
// ==========================================
// Inheritance code reusability aur parent-child relationship (IS-A relationship) banane ke liye hota hai.

// ❌ BAD PRACTICE: Code Duplication
// badCar aur badTruck dono alag hain par make, model, honk, aur constructor assignment
// bilkul exact same copy-paste ho raha hai. DRY (Don't Repeat Yourself) tut raha hai.
class badCar {
    make: string;
    model: string;
    honk: "meow" | "beep";
    constructor(make: string, model: string, honk: "meow" | "beep") {
        this.make = make;
        this.model = model;
        this.honk = honk;
    }
    openTruck(): void {
        console.log("truck open");
    }
}

class badTruck {
    make: string;
    model: string;
    honk: "meow" | "beep";
    constructor(make: string, model: string, honk: "meow" | "beep") {
        this.make = make;
        this.model = model;
        this.honk = honk;
    }
    loadCargo(): void {
        console.log("cargo load");
    }
}

// Global function (union types se hardcode karna pad raha hai kyunki koi common parent type nahi hai)
const startEngine = (vechile: badCar | badTruck) => {
    console.log("engine is starting");
};


//  GOOD PRACTICE: Using Inheritance
// Common fields aur methods ko ek Parent class (Base Class) mein wrap kar diya.
class Vechile {
    // protected fields: child classes use kar sakti hain par outside clients directly edit nahi kar sakte.
    protected make: string;
    protected model: string;
    protected honk: "meow" | "beep";
    protected door: number;

    constructor(make: string, model: string, honk: "meow" | "beep", door: number) {
        this.make = make;
        this.model = model;
        this.honk = honk;
        this.door = door;
    }

    startEngine(): void {
        console.log("engine started for vechile");
    }
}

// 'extends' keyword batata hai ki 'car' is a 'Vechile' (Inheritance bridge)
class car extends Vechile {
    constructor(make: string, model: string, honk: "meow" | "beep", door: number) {
        // super(): Parent class ke constructor ko trigger karta hai parameters ke sath.
        // Ye sabse pehle run hona chahiye child constructor ke andar.
        super(make, model, honk, door);
    }
    openTruck(): void {
        console.log("truck open");
    }
}

class truck extends Vechile {
    constructor(make: string, model: string, honk: "meow" | "beep", door: number) {
        super(make, model, honk, door);
    }
    loadCargo(): void {
        console.log("cargo load");
    }
}

// Test instances
const myCar = new car("Honda", "Civic", "beep", 4);

// startEngine() humne 'car' class ke andar nahi likha tha, fir bhi we can call it.
// Kyunki it is inherited from Vechile!
myCar.startEngine();

// Custom child method execution
myCar.openTruck();
