import { User } from "./User.ts";
import { Split } from "./Split.ts";
import { Expense } from "./Expense.ts";
import { SplitType } from "./enums.ts";
import { ExpenseValidator } from "./ExpenseValidator.ts";
import { BalanceManager } from "./BalanceManager.ts";

export class SplitwiseService {
    private users: Map<string, User>;
    private expenses: Expense[];
    private balanceManager: BalanceManager;

    private static instance: SplitwiseService | null = null;

    private constructor() {
        this.users = new Map();
        this.expenses = [];
        this.balanceManager = new BalanceManager();
    }

    public static getInstance(): SplitwiseService {
        if (SplitwiseService.instance === null) {
            SplitwiseService.instance = new SplitwiseService();
        }
        return SplitwiseService.instance;
    }

    // 1. User ko register karo aur list mein store karo
    public registerUser(userId: string, name: string, email: string): User {
        const user = new User(userId, name, email)
        this.users.set(userId, user);
        return user;
    }

    // 2. Expense add karo, validate karo, aur balances update karo
    public addExpense(
        description: string,
        amount: number,
        paidById: string,
        currency: string,
        splitType: SplitType,
        splits: Split[]
    ): Expense | null {
        const user = this.users.get(paidById);
        if (!user) {
            console.log("error user not found");
            return null
        }
        if (!ExpenseValidator.validate(splits, amount, splitType)) {
            console.log("error invalid expense");
            return null
        }
        const expenseID = "EXP_" + (this.expenses.length + 1);
        const expense = new Expense(expenseID, description, amount, user, currency, splitType, splits);

        this.expenses.push(expense);

        for (let split of splits) {
            this.balanceManager.UpdateBalance(paidById, split.getUser().getUserId(), currency, split.getAmount())
        }
        return expense;
    }

    // 3. Scoreboard/Balances print karo
    public printBalances(): void {
        this.balanceManager.printBalances();
    }
}
