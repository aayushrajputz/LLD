import { User } from "./User.ts";

export class BalanceManager {
    // Nested Map structure: Map<userId, Map<friendId, Map<currency, balanceAmount>>>
    private balances: Map<string, Map<string, Map<string, number>>>;

    constructor() {
        this.balances = new Map();
    }

    // Updates balance for both paid user (+ amount) and owed user (- amount)
    public UpdateBalance(userPaidId: string, userOwedId: string, currency: string, amount: number): void {
        if (userPaidId === userOwedId) {
            return;
        }

        // --- DIARY 1: userPaidId (Owner of diary gets money) ---
        // 1. If userPaidId doesn't exist, initialize their friend map
        if (!this.balances.has(userPaidId)) {
            this.balances.set(userPaidId, new Map());
        }
        const friendMap = this.balances.get(userPaidId)!;

        // 2. If userOwedId doesn't exist in friend map, initialize their currency map
        if (!friendMap.has(userOwedId)) {
            friendMap.set(userOwedId, new Map());
        }
        const currencyMap = friendMap.get(userOwedId)!;

        // 3. Read current balance for the given currency (default to 0)
        const currentBalance = currencyMap.get(currency) || 0;

        // 4. Update balance: Paid user gets money (+ amount)
        currencyMap.set(currency, currentBalance + amount);


        // --- DIARY 2: userOwedId (Owner of diary owes money) ---
        // 1. If userOwedId doesn't exist, initialize their friend map
        if (!this.balances.has(userOwedId)) {
            this.balances.set(userOwedId, new Map());
        }
        const friendMap2 = this.balances.get(userOwedId)!;

        // 2. If userPaidId doesn't exist in friend map, initialize their currency map
        if (!friendMap2.has(userPaidId)) {
            friendMap2.set(userPaidId, new Map());
        }
        const currencyMap2 = friendMap2.get(userPaidId)!;

        // 3. Read current balance for the given currency (default to 0)
        const currentBalance2 = currencyMap2.get(currency) || 0;

        // 4. Update balance: Owed user owes money (- amount)
        currencyMap2.set(currency, currentBalance2 - amount);
    }

    // Prints all active balances in a human-readable format
    public printBalances(): void {
        console.log("\n=============================================");
        console.log("💳 ACTIVE BALANCES SUMMARY");
        console.log("=============================================");
        
        let hasBalances = false;

        for (const [userId, friendMap] of this.balances.entries()) {
            for (const [friendId, currencyMap] of friendMap.entries()) {
                for (const [currency, amount] of currencyMap.entries()) {
                    // Only print if the balance is positive to avoid printing duplicates 
                    // (e.g. if A owes B +100, then B owes A -100. We only print the positive perspective).
                    if (amount > 0) {
                        console.log(`User ${friendId} owes User ${userId}: ${amount.toFixed(2)} ${currency}`);
                        hasBalances = true;
                    }
                }
            }
        }

        if (!hasBalances) {
            console.log("No active balances. All settled up! 🎉");
        }
        console.log("=============================================\n");
    }
}
