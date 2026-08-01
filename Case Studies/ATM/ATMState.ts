import { TransactionType } from "./enums.ts";
export interface ATMState {
    insertCard(atm: any): void
    enterPin(atm: any, pin: number): void
    selectOperation(atm: any, type: TransactionType): void
    withdraw(atm: any, amount: number): void
    ejectCard(atm: any): void
} 