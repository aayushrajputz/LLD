import { State } from "./State.ts";
import { Coin } from "./enums.ts";

export class IdleState implements State {
    insertCoin(machine: any, coin: Coin): void {
        machine.addCoins(coin);
        console.log("coin inserted + " + coin);
        machine.setState(new HasMoneyState());
    }
    selectItem(machine: any, code: number): void {
        console.log("select item");
    }
    returnCoins(machine: any): number {
        console.log("return coins");
        return 0;
    }
    dispenseItem(machine: any, code: number): void {
        console.log("dispense item");
    }
}

export class HasMoneyState implements State {
    insertCoin(machine: any, coin: Coin): void {
        machine.addCoins(coin);
        console.log("coin inserted + " + coin);
    }
    selectItem(machine: any, code: number): void {
        const item = machine.getInventory().getItem(code);
        if (item == null) {
            console.log("item not found");
            return;
        }
        if (item.getPrice() > machine.getCurrentBalance()) {
            console.log("insufficient money");
            return;
        }

        machine.setState(new DispenseState());
        machine.getState().dispenseItem(machine, code);


    }
    returnCoins(machine: any): number {
        const amount = machine.getTotalMoney()
        machine.reset()
        console.log("return " + amount)
        machine.setState(new IdleState())
        return amount
    }
    dispenseItem(machine: any, code: number): void {
        console.error(" select item first")
    }
}
export class DispenseState implements State {
    insertCoin(machine: any, coin: Coin): void {
        console.log("Please wait, dispensing item...");
    }

    selectItem(machine: any, code: number): void {
        console.log("Please wait, dispensing item...");
    }

    returnCoins(machine: any): number {
        console.log("Cannot refund while dispensing!");
        return 0;
    }

    dispenseItem(machine: any, code: number): void {
        const item = machine.getInventory().getItem(code)!;
        machine.getInventory().removeItem(code);

        const change = machine.getTotalMoney() - item.getPrice();
        console.log(`Dispensed item: ${item.getType()}`);

        if (change > 0) {
            console.log(`Returned change: ${change}`);
        }

        machine.resetMoney();
        machine.setState(new IdleState());
    }
}
