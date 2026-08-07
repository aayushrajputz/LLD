import { Coin } from "./enums.ts";

export interface State {
    insertCoin(machine: any, coin: Coin): void;
    selectItem(machine: any, code: number): void;
    returnCoins(machine: any): number;
    dispenseItem(machine: any, code: number): void;

}  