// Write your Encapsulation code here step-by-step with the Coach
class badBankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance
    }
}

const myAccount = new badBankAccount(100)
myAccount.balance = -500

console.log("Balance after direct hack:", myAccount.balance);

class goodBankAcc {
    private balance: number;
    private owner: string

    constructor(balance: number, owner: string) {
        this.balance = balance
        this.owner = owner
    }

    deposit(amount: number) {
        if (amount < 0) {
            console.log("deposit amount must be greater than 0");

            return;
        }

        this.balance = this.balance + amount

    }



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
    getBalance(): number {
        return this.balance
    }
}


const safeAccount = new goodBankAcc(1000, "aayush")


safeAccount.deposit(500)
safeAccount.withdraw(200)
console.log("final safe balance", safeAccount.getBalance());

safeAccount.withdraw(2000);
safeAccount.deposit(-100);


