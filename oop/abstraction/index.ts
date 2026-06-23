// ==========================================
// PILLAR 2: ABSTRACTION (Hiding Complexity)
// ==========================================
// Abstraction matlab: Internal complex procedures ko chhupana aur client ko sirf 
// simple interfaces/buttons dena taaki complexity minimize ho sake.

// ❌ BAD PRACTICE: No Abstraction
// Machine ke internal functions (grind, brew, boil) public hain.
// Client ko khud manual orders dene padenge jo galti se galat sequence mein run ho sakte hain!
class badCoffeeMachine {
    public grindBeans() {
        console.log("Grinding coffee beans...");
    }
    public brewCoffee() {
        console.log("brewing fresh coffee");
    }
    public boilWater() {
        console.log("boiling water... ");
    }
}

// Client usage
const machine = new badCoffeeMachine();
// Client called it in wrong order: boil -> brew -> grind (Which is wrong/risky)
machine.boilWater();
machine.brewCoffee();
machine.grindBeans();


//  GOOD PRACTICE: Using Abstraction
// Humne complex implementation steps ko private mark karke hide kiya.
// Aur client ko ek simple public method "makeCoffee" provide kiya.
class goodCoffeeMachine {
    private grindBeans() {
        console.log("grinding coffee beans..");
    }
    private brewCoffee() {
        console.log("brewing coffee");
    }
    private boilWater() {
        console.log("boiling water");
    }
    
    // Interface method exposed to client
    public makeCoffee() {
        // Class ensures correct internal ordering
        this.grindBeans();
        this.boilWater();
        this.brewCoffee();
        console.log("here is your perfect coffee");
    }
}

// Client usage is clean, simple, and safe.
const goodMachine = new goodCoffeeMachine();
goodMachine.makeCoffee(); // Output sequence will always be correct!
// goodMachine.grindBeans(); // ❌ Compiler error: Property 'grindBeans' is private.