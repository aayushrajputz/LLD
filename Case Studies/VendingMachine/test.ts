import { VendingMachine } from "./VendingMachine.ts";
import { Item } from "./Item.ts";
import { ItemType, Coin } from "./enums.ts";

const machine = new VendingMachine();
const inventory = machine.getInventory();

// 1. Stock Vending Machine Inventory
console.log("========== 1. STOCKING INVENTORY ==========");
inventory.addItem(101, new Item(ItemType.COKE, 25));   // Code 101: Coke ($25)
inventory.addItem(102, new Item(ItemType.PEPSI, 35));  // Code 102: Pepsi ($35)
inventory.addItem(103, new Item(ItemType.SODA, 15));   // Code 103: Soda ($15)
console.log("Inventory stocked with Coke (101), Pepsi (102), Soda (103)!\n");

// 2. Scenario 1: Successful Purchase with Change Return
console.log("========== SCENARIO 1: SUCCESSFUL PURCHASE ==========");
machine.insertCoin(Coin.QUARTER); // Insert 25
machine.insertCoin(Coin.QUARTER); // Insert 25 (Total: 50)
machine.selectItem(102);           // Buy Pepsi ($35) -> Change returned: 15
console.log("");

// 3. Scenario 2: Refund Request
console.log("========== SCENARIO 2: REFUND REQUEST ==========");
machine.insertCoin(Coin.DIME);    // Insert 10
machine.insertCoin(Coin.NICKEL);  // Insert 5 (Total: 15)
machine.refundFullMoney();        // Request refund -> Returns 15
console.log("");

// 4. Scenario 3: Invalid Actions (No money inserted)
console.log("========== SCENARIO 3: INVALID ACTION ==========");
machine.selectItem(101);           // Error: Insert coin first
