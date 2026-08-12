import { CellStatus } from "./enums.ts";
export class Board {
    private grid: CellStatus[][]

    constructor() {
        this.grid = [];
        this.initializeBoard();
    }
    public initializeBoard() {
        for (let i = 0; i < 3; i++) {
            this.grid[i] = []
            for (let j = 0; j < 3; j++) {
                this.grid[i][j] = CellStatus.empty
            }
        }
    }
    public makeMove(row: number, col: number, symbol: CellStatus): boolean {
        if (row >= 0 && row < 3 && col >= 0 && col < 3 && this.grid[row][col] === CellStatus.empty) {
            this.grid[row][col] = symbol;
            return true;
        } else {

            return false;
        }
    }
    public isFull(): boolean {
        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++) {
                if (this.grid[i][j] === CellStatus.empty) {
                    return false
                }

            }
        return true
    }
    public getGrid(): CellStatus[][] {
        return this.grid
    }
}




