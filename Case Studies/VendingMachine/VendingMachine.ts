import { State } from "./State.ts";
import { IdleState } from "./VendingMachineStates.ts";
import { Inventory } from "./Inventory.ts";
import { Coin } from "./enums.ts";

export class VendingMachine {
    private currentState: State;
    private Inventory: Inventory;
    private coinList: Coin[];

    constructor() {
        this.currentState = new IdleState();
        this.Inventory = new Inventory(new Map());
        this.coinList = [];
    }

    public getState(): State {
        return this.currentState;
    }

    public setState(state: State) {
        this.currentState = state;
    }

    public getInventory(): Inventory {
        return this.Inventory;
    }

    public addCoin(coin: Coin) {
        this.coinList.push(coin);
    }
    
    public addCoins(coin: Coin) {
        this.addCoin(coin);
    }

    public getTotalMoney(): number {
        return this.coinList.reduce((total, coin) => total + coin, 0);
    }

    public getCurrentBalance(): number {
        return this.getTotalMoney();
    }

    public resetBalance(): void {
        this.coinList = [];
    }

    public resetMoney(): void {
        this.resetBalance();
    }

    public reset(): void {
        this.resetBalance();
    }
    public insertCoin(coin: Coin) {
        this.currentState.insertCoin(this, coin)

    }
    public selectItem(code: number) {
        this.currentState.selectItem(this, code)
    }
    public refundFullMoney(): number {
        return this.currentState.returnCoins(this);
    }




} 