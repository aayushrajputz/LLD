import { User } from "./User.ts";
import { Split } from "./Split.ts";
import { SplitType } from "./enums.ts";

export class Expense {
    private expenseId: string;
    private description: string;
    private amount: number;
    private paidBy: User;
    private currency: string;
    private splitType: SplitType;
    private splits: Split[];

    constructor(
        expenseId: string, 
        description: string, 
        amount: number, 
        paidBy: User, 
        currency: string,
        splitType: SplitType, 
        splits: Split[]
    ) {
        this.expenseId = expenseId;
        this.description = description;
        this.amount = amount;
        this.paidBy = paidBy;
        this.currency = currency;
        this.splitType = splitType;
        this.splits = splits;
    }

    public getExpenseId(): string {
        return this.expenseId;
    }

    public getDescription(): string {
        return this.description;
    }

    public getAmount(): number {
        return this.amount;
    }

    public getPaidBy(): User {
        return this.paidBy;
    }

    public getCurrency(): string {
        return this.currency;
    }

    public getSplitType(): SplitType {
        return this.splitType;
    }

    public getSplits(): Split[] {
        return this.splits;
    }
}
