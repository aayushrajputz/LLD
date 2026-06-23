// ==========================================
// PILLAR 1: ENCAPSULATION (Data Hiding & Protection)
// ==========================================
// Encapsulation ensures that an object's internal state (variables) is protected 
// from unauthorized direct modifications and can only be accessed through public methods.

// ❌ BAD PRACTICE: No Encapsulation
// 'balance' variables by-default public hai, jisse koi bhi class ke bahar direct modify kar sakta hai.
class badBankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }
}

const myAccount = new badBankAccount(100);
myAccount.balance = -500; // Direct variable modify kiya (No validation rules)
console.log("Balance after direct hack:", myAccount.balance); // Output: -500


//  GOOD PRACTICE: Using Encapsulation
// variables ko 'private' keyword se safe kar diya, aur input validation ke sath public methods diye.
class goodBankAcc {
    private balance: number; // class ke bahar access nahi ho sakta
    private owner: string;

    constructor(balance: number, owner: string) {
        this.balance = balance;
        this.owner = owner;
    }

    // Public method with validation checks (Controlled Modification)
    deposit(amount: number) {
        if (amount < 0) {
            console.log("deposit amount must be greater than 0");
            return;
        }
        this.balance = this.balance + amount;
    }

    // Public method with validation checks (Controlled Modification)
    withdraw(amount: number) {
        if (amount < 0) {
            console.log("withdraw amount must be greater than 0");
            return;
        }
        if (this.balance < amount) {
            console.log("Insufficient Balance");
            return;
        }
        this.balance = this.balance - amount;
        console.log("Withdraw successful");
    }

    // Read-only getter interface to read the balance safely (Read-Only Access)
    getBalance(): number {
        return this.balance;
    }
}

// Client usage
const safeAccount = new goodBankAcc(1000, "aayush");

// safeAccount.balance = -200; // ❌ TS Compiler block kar dega: Property 'balance' is private

safeAccount.deposit(500); // balance becomes 1500
safeAccount.withdraw(200); // balance becomes 1300
console.log("final safe balance", safeAccount.getBalance());

safeAccount.withdraw(2000); // Insufficient balance warning triggered!
safeAccount.deposit(-100);  // deposit amount warning triggered!
