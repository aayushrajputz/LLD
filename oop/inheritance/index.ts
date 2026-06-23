class badCar {
    make: string
    model: string
    honk: "meow" | "beep"
    constructor(make: string, model: string, honk: "meow" | "beep") {
        this.make = make
        this.model = model
        this.honk = honk
    }
    openTruck(): void {
        console.log("truck open");

    }

}

class badTruck {
    make: string
    model: string
    honk: "meow" | "beep"
    constructor(make: string, model: string, honk: "meow" | "beep") {
        this.make = make
        this.model = model
        this.honk = honk
    }
    loadCargo(): void {
        console.log("cargo load");

    }

}

const startEngine = (vechile: badCar | badTruck) => {
    console.log("engine is starting");

}

class Vechile {
    protected make: string
    protected model: string
    protected honk: "meow" | "beep"
    protected door: number
    constructor(make: string, model: string, honk: "meow" | "beep", door: number) {
        this.make = make
        this.model = model
        this.honk = honk
        this.door = door
    }
    startEngine(): void {
        console.log("engine started for vechile");

    }
}
class car extends Vechile {
    constructor(make: string, model: string, honk: "meow" | "beep", door: number) {
        super(make, model, honk, door)
    }
    openTruck(): void {
        console.log("truck open");

    }
}

class truck extends Vechile {
    constructor(make: string, model: string, honk: "meow" | "beep", door: number) {

        super(make, model, honk, door)
    }
    loadCargo(): void {
        console.log("cargo load");
    }
}

const myCar = new car("Honda", "Civic", "beep", 4);

// 1. startEngine() humne 'car' class ke andar nahi likha tha, par hum ise call kar sakte hain kyunki it extends Vechile!
myCar.startEngine();

// 2. Custom car method ko call karo
myCar.openTruck();
