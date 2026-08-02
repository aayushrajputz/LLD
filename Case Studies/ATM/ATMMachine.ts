import { ATMState } from "./ATMState.ts";
import { IdleState } from "./ATMStates.ts";
import { TransactionType } from "./enums.ts";

export class ATMMachine {

    private currentState: ATMState
    constructor() {
        this.currentState = new IdleState();
    }

    setState(state: ATMState) {
        this.currentState = state
    }

    insertCard() {
        this.currentState.insertCard(this)
    }

    ejectCard() {
        this.currentState.ejectCard(this)
    }

    enterPin(pin: number) {
        this.currentState.enterPin(this, pin)
    }

    withdraw(amount: number) {
        this.currentState.withdraw(this, amount)
    }

    selectOperation(type: TransactionType) {
        this.currentState.selectOperation(this, type)
    }


}