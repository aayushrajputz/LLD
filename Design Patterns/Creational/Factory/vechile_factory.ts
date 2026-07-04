// ========================================================
// FACTORY DESIGN PATTERN
// ========================================================
// Definition: Object creation ka logic ek separate class (Factory) ko 
// delegate kar diya jata hai taaki client direct subclasses par depend na kare.

// 1. Common Product Interface
interface vechile {
    drive(): void;
}

// 2. Concrete Product A
class car implements vechile {
    drive(): void {
        console.log("driving car");
    }
}

// 3. Concrete Product B
class bike implements vechile {
    drive(): void {
        console.log("riding bike");
    }
}

// 4. Creator (Factory Class)
class vechileFactory {
    // Return type is kept strictly "vechile" (No null returned as we throw error for safety)
    public static createVechile(type: string): vechile {
        if (type === "car") {
            return new car();
        } else if (type === "bike") {
            return new bike();
        } else {
            throw new Error("invalid vechile type");
        }
    }
}

// ========================================================
// --- Client Code (Using Factory) ---
// ========================================================
// Client does not know how to construct 'car' or 'bike'. It just requests them.
const myCar = vechileFactory.createVechile("car");
myCar.drive();

const myBike = vechileFactory.createVechile("bike");
myBike.drive();
