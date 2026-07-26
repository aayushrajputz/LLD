import { SeatCategory } from "./enums.ts";

export class Seat {
    private seatId: string;
    private row: number;
    private col: number;
    private category: SeatCategory;

    constructor(seatId: string, row: number, col: number, category: SeatCategory) {
        this.seatId = seatId;
        this.row = row;
        this.col = col;
        this.category = category;
    }

    public getSeatId(): string { return this.seatId; }
    public getRow(): number { return this.row; }
    public getCol(): number { return this.col; }
    public getCategory(): SeatCategory { return this.category; }
}
