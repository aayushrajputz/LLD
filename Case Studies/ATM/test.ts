import { ATMMachine } from "./ATMMachine.ts";
import { TransactionType } from "./enums.ts";

const atm = new ATMMachine();

// ===== Scenario 1: Successful Withdrawal =====
console.log("========== SCENARIO 1: WITHDRAWAL ==========");
atm.insertCard();           // Card inserted → HasCardState
atm.enterPin(1234);         // PIN correct → PinEnteredState
atm.selectOperation(TransactionType.WITHDRAW);  // Withdrawal selected
atm.withdraw(500);          // Dispense $500 → IdleState
console.log("");

// ===== Scenario 2: Balance Enquiry =====
console.log("========== SCENARIO 2: BALANCE CHECK ==========");
atm.insertCard();           // Card inserted → HasCardState
atm.enterPin(1234);         // PIN correct → PinEnteredState
atm.selectOperation(TransactionType.BALANCE_ENQUIRY);  // Shows balance, ejects card → IdleState
console.log("");

// ===== Scenario 3: Wrong PIN =====
console.log("========== SCENARIO 3: WRONG PIN ==========");
atm.insertCard();           // Card inserted → HasCardState
atm.enterPin(9999);         // Wrong PIN! Card ejected → IdleState
console.log("");

// ===== Scenario 4: Invalid Actions (Error Handling) =====
console.log("========== SCENARIO 4: INVALID ACTIONS ==========");
atm.withdraw(100);          // Error: No card inserted
atm.enterPin(1234);         // Error: No card inserted
atm.ejectCard();            // Error: No card inserted
