// ==========================================
// SOLID: INTERFACE SEGREGATION PRINCIPLE (ISP)
// ==========================================
// Definition: Clients ko aisi interfaces par depend karne ke liye force 
// nahi kiya jana chahiye jinhe wo use hi nahi karte.
// Fayda: Interface chota aur specific rahega, jisse classes clean rehti hain.

// ❌ BAD PRACTICE: One fat interface containing everything
// "worker" interface mein work aur eat dono hain, jisse robot ko forced hokar eat() implement karna pad raha hai.
interface worker {
    work(): void;
    eat(): void;
}

class human implements worker {
    work(): void {
        console.log("human is working");
    }
    eat(): void {
        console.log("human is eating");
    }
}

class robot implements worker {
    work(): void {
        console.log("robot is working");
    }
    eat(): void {
        // Robot does not eat, but forced to write something here
        console.log("robot is not eating");
    }
}

// ========================================================

//  GOOD PRACTICE (ISP Clean): Segregating Interfaces
// Humne single fat interface ko specific interfaces mein split kiya.

// 1. Specific interface for work
interface Workable {
    work(): void;
}

// 2. Specific interface for feeding
interface Feedable {
    eat(): void;
}

// Human implements both contracts
class humann implements Workable, Feedable {
    work(): void {
        console.log("human is working");
    }
    eat(): void {
        console.log("human is eating");
    }
}

// Robot only implements what it actually uses (Workable)
class robott implements Workable {
    work(): void {
        console.log("robot is working");
    }
}

// --- Testing ISP ---
const h = new humann();
const r = new robott();

h.work();
h.eat();
r.work(); // Robot has no eat method, absolutely clean and safe!