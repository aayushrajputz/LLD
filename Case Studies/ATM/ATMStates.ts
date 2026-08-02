import { ATMState } from "./ATMState.ts";
import { TransactionType } from "./enums.ts";

export class IdleState implements ATMState {
    insertCard(atm: any): void {
        console.log("Card inserted successfully.");
        atm.setState(new HasCardState());
        console.log("Please enter your PIN.");
    }

    enterPin(atm: any, pin: number): void {
        console.log("Please insert your card first!");
    }

    selectOperation(atm: any, type: TransactionType): void {
        console.log("Please insert your card first!");
    }

    withdraw(atm: any, amount: number): void {
        console.log("Please insert your card first!");
    }

    ejectCard(atm: any): void {
        console.log("No card inserted.");
    }
}

export class HasCardState implements ATMState {
    insertCard(atm: any): void {
        console.log("Card is already inserted!");
    }

    enterPin(atm: any, pin: number): void {
        if (pin === 1234) {
            console.log("PIN verified successfully!");
            atm.setState(new PinEnteredState());
            console.log("Please select an operation.");
        } else {
            console.log("Wrong PIN! Ejecting card...");
            atm.setState(new IdleState());
        }
    }

    selectOperation(atm: any, type: TransactionType): void {
        console.log("Please enter your PIN first!");
    }

    withdraw(atm: any, amount: number): void {
        console.log("Please enter your PIN first!");
    }

    ejectCard(atm: any): void {
        console.log("Card ejected successfully.");
        atm.setState(new IdleState());
    }
}

export class PinEnteredState implements ATMState {
    insertCard(atm: any): void {
        console.log("Card is already inserted!");
    }

    enterPin(atm: any, pin: number): void {
        console.log("PIN already entered!");
    }

    selectOperation(atm: any, type: TransactionType): void {
        console.log(`Operation ${type} selected.`);

        if (type === TransactionType.BALANCE_ENQUIRY) {
            console.log("Your balance: $1000");
            // Balance check ke baad card eject ho jata hai
            this.ejectCard(atm);
        }
        else if (type === TransactionType.WITHDRAW) {
            // WITHDRAW select karne par card eject NAHI hoga
            // Kyunki user ko abhi amount enter karna hai
            console.log("Withdrawal selected. Please enter amount.");
        }
    }

    withdraw(atm: any, amount: number): void {
        console.log(`Dispensing cash: $${amount}`);
        console.log("Card ejected. Transaction complete.");
        atm.setState(new IdleState());
    }

    ejectCard(atm: any): void {
        console.log("Card ejected successfully.");
        atm.setState(new IdleState());
    }
}
