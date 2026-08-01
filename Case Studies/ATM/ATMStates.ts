import { ATMState } from "./ATMState.ts";
import { TransactionType } from "./enums.ts";

export class IdleState implements ATMState {
    insertCard(atm: any): void {
        console.log("card insert please");
        atm.setState(new atm.HasCardState());
        console.log("Please enter your pin");
    }

    enterPin(atm: any, pin: number): void {
        console.log("Please insert your card first");
    }

    selectOperation(atm: any, type: TransactionType): void {
        console.log("Please insert your card first");
    }

    withdraw(atm: any, amount: number): void {
        console.log("Please insert your card first");
    }

    ejectCard(atm: any): void {
        console.log("Please insert your  card");

    }




}