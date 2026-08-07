import { ItemType } from "./enums";

export class Item {
    private type: ItemType;
    private price: number;

    constructor(type: ItemType, price: number) {
        this.type = type;
        this.price = price;
    }

    public getType() {
        return this.type;
    }
    public getPrice() {
        return this.price;
    }

}