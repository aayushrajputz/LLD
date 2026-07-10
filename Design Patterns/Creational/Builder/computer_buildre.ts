// ========================================================
// BUILDER DESIGN PATTERN
// ========================================================
// Definition: Complex objects ko step-by-step assemble karne ke liye use hota hai.
// Fayda: 
// 1. Telescoping constructors (bade, confusing constructors) se bachata hai.
// 2. Objects ko construct hone ke baad Immutable (readonly) banata hai.

// 1. Target Product Class
class computer {
    //  READONLY properties ensure immutability. No one can change them from outside.
    public readonly cpu: string;
    public readonly ram: string;
    public readonly storage: string;

    // Constructor accepts the builder object
    constructor(builder: computerBuilder) {
        this.cpu = builder.cpu;
        this.ram = builder.ram;
        this.storage = builder.storage;
    }
}

// 2. Builder Class
class computerBuilder {
    public cpu: string;
    public ram: string;
    public storage: string;

    constructor() {
        // Default empty values (or we can set default values)
        this.cpu = '';
        this.ram = '';
        this.storage = '';
    }

    // Setters return "this" to allow Method Chaining
    setCpu(cpu: string): this {
        this.cpu = cpu;
        return this;
    }

    setRam(ram: string): this {
        this.ram = ram;
        return this;
    }

    setStorage(storage: string): this {
        this.storage = storage;
        return this;
    }

    // The final assembly method that returns the complete computer object
    build(): computer {
        // We can add validation logic here before instantiating
        if (this.cpu === '') {
            throw new Error("Cannot build computer without CPU");
        }
        return new computer(this);
    }
}

// ========================================================
// --- Client Code (Using Builder Chaining) ---
// ========================================================

// 1. Building a basic Office PC
const officePC = new computerBuilder()
    .setCpu("Intel i3")
    .setRam("8GB")
    .setStorage("256GB SSD")
    .build();

// 2. Building a High-end Gaming PC
const gamingPC = new computerBuilder()
    .setCpu("Ryzen 9")
    .setRam("32GB")
    .setStorage("1TB SSD")
    .build();

console.log("Office PC Config:", officePC);
console.log("Gaming PC Config:", gamingPC);

// officePC.cpu = "Intel i9"; ❌ (Will cause TypeScript compilation error because cpu is readonly!)
