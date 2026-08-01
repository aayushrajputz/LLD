import { SplitwiseService } from "./SplitwiseService.ts";
import { SplitType } from "./enums.ts";
import { EqualSplit, ExactSplit, PercentageSplit } from "./Split.ts";

// 1. Get Splitwise Service Instance
const splitwise = SplitwiseService.getInstance();

// 2. Register Users
console.log("Registering Users...");
const aayush = splitwise.registerUser("U1", "Aayush", "aayush@gmail.com");
const amit = splitwise.registerUser("U2", "Amit", "amit@gmail.com");
const sumit = splitwise.registerUser("U3", "Sumit", "sumit@gmail.com");
console.log("Users registered successfully!\n");

// Scenario 1: EQUAL Split
// Aayush paid ₹300 for dinner. Splits equally among Aayush, Amit, and Sumit.
// Math: 300 / 3 = 100 each. Amit owes Aayush 100, Sumit owes Aayush 100.
console.log("--- Scenario 1: EQUAL Split (INR) ---");
const equalSplits = [
    new EqualSplit(aayush),
    new EqualSplit(amit),
    new EqualSplit(sumit)
];
splitwise.addExpense("Dinner bill", 300, "U1", "INR", SplitType.EQUAL, equalSplits);
splitwise.printBalances();

// Scenario 2: EXACT Split
// Amit paid $150 for shopping. Amit owes $50, Sumit owes $100.
// Math: Sumit owes Amit 100 USD.
console.log("--- Scenario 2: EXACT Split (USD) ---");
const exactSplits = [
    new ExactSplit(amit, 50),
    new ExactSplit(sumit, 100)
];
splitwise.addExpense("Shopping Mall", 150, "U2", "USD", SplitType.EXACT, exactSplits);
splitwise.printBalances();

// Scenario 3: PERCENT Split
// Sumit paid ₹1000 for room rent. Sumit owes 40% (400), Aayush owes 60% (600).
// Math: Aayush owes Sumit 600 INR.
console.log("--- Scenario 3: PERCENT Split (INR) ---");
const percentSplits = [
    new PercentageSplit(sumit, 40),
    new PercentageSplit(aayush, 60)
];
splitwise.addExpense("Room Rent", 1000, "U3", "INR", SplitType.PERCENT, percentSplits);
splitwise.printBalances();
