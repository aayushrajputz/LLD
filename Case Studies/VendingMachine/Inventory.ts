
import { ItemType } from "./enums.ts";
import { Item } from "./Item.ts";

export class Inventory {
    private Inventory: Map<number, Item>;


    constructor(inventory: Map<number, Item>) {
        this.Inventory = new Map();
    }

    public getItem(code: number): Item | null {
        return this.Inventory.get(code) ?? null;
    }

    public addItem(code: number, item: Item): void {
        this.Inventory.set(code, item);
    }

    public removeItem(code: number): void {
        this.Inventory.delete(code);
    }
    public hasItem(code: number): boolean {
        return this.Inventory.has(code);
    }
}