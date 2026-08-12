import { CellStatus } from "./enums.ts"
export class Player {
    private name: string;
    private symbol: CellStatus

    constructor(name: string, symbol: CellStatus) {
        this.name = name
        this.symbol = symbol
    }
    public getName(): string {
        return this.name
    }
    public getSymbol(): CellStatus {
        return this.symbol;

    }
}  