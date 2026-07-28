import { SplitType } from "./enums.ts";
import { Split, PercentageSplit } from "./Split.ts";

export class ExpenseValidator {
    public static validate(splits: Split[], totalAmount: number, splitType: SplitType): boolean {
        if (splitType === SplitType.EQUAL) {
            const shareAmount = totalAmount / splits.length;

            for (let split of splits) {
                split.setAmount(shareAmount);
            }
            return true;
        }
        else if (splitType === SplitType.EXACT) {
            let sum = 0;
            for (let split of splits) {
                sum += split.getAmount();
            }
            return sum === totalAmount;
        }
        else if (splitType === SplitType.PERCENT) {
            let sum = 0;
            for (let split of splits) {
                const percentageSplit = split as PercentageSplit;
                sum += percentageSplit.getPercentage();
            }

            if (sum === 100) {
                for (let split of splits) {
                    const percentageSplit = split as PercentageSplit;
                    const amount = (percentageSplit.getPercentage() / 100) * totalAmount;
                    split.setAmount(amount);
                }
                return true;
            }
            return false;
        }

        return false;
    }
}
