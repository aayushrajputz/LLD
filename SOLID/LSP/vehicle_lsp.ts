// ==========================================
// SOLID: LISKOV SUBSTITUTION PRINCIPLE (LSP)
// ==========================================
// Definition: Child class apne Parent class ko bina kisi system crash ke 
// safely replace (substitute) karne ke kabil honi chahiye.

// ❌ BAD PRACTICE: Violation of LSP
// Parent class "vechile" ke paas startEngine() hai, jisse Bicycle child ko bhi 
// startEngine inherit karna pad raha hai aur crash error throw karna pad raha hai.
class vechile {
    startEngine(): void {
        console.log("engine start");
    }
}

class car extends vechile {
    startEngine(): void {
        console.log("car engine start");
    }
}

class bycycle extends vechile {
    startEngine(): void {
        // LSP Violation: Cycle engine start nahi kar sakti, toh app crash kar rahi hai
        throw new Error("bycile have no engine");
    }
}

// --- Testing Bad Practice (Will crash the application) ---
// const vechiles: vechile[] = [new car(), new bycycle()];
// vechiles.forEach(vechile => {
//     vechile.startEngine(); // BOOM! Crashes when reaching bycycle
// });


// ========================================================

//  GOOD PRACTICE (LSP Clean): Segregating Behaviors
// Humne common base movements aur engine properties ko alag hierarchies mein divide kiya.

// 1. Common base for ALL vehicles
class VechileGood {
    move(): void {
        console.log("car  is moving");
    }
}

// 2. Base for only Engine-based vehicles
class EngineVehicle extends VechileGood {
    startEngine(): void {
        console.log("engine started");
    }
}

// 3. Car inherits from EngineVehicle (Gets both move() and startEngine())
class carGood extends EngineVehicle {
    startEngine(): void {
        console.log("car engine started");
    }
}

// 4. Bicycle directly inherits from VechileGood (Gets only move(), no engine methods)
class ByCycleGood extends VechileGood {
    move(): void {
        console.log("bycycle is moving");

    }
}

// --- Testing Good Practice ---
const myGarage: VechileGood[] = [new carGood(), new ByCycleGood()];

myGarage.forEach(vehicle => {
    if (vehicle instanceof EngineVehicle) {
        vehicle.startEngine();
    }
    // We can call move() on any vehicle type safely, no crash!
    vehicle.move();


});