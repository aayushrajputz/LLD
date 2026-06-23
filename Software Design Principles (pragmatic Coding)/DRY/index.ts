// ==========================================
// DRY: Don't Repeat Yourself
// ==========================================
// Rule: Ek hi cheez ek hi jagah likho. Copy-paste = DRY violation.
// Write your code below step-by-step with the Coach
// BAD PRACTICE: Same discount logic do jagah repeat ho raha hai

function getCartDiscount(price: number) {
    return price - (price * 0.10);


}

function getOrderDiscount(price: number) {
    return price - (price * 0.10);
}



// CORRECT PRACTICE: Ek function banao or usko use karo

function applyDiscount(price: number, discountPercentage: number) {
    price = price - (price * discountPercentage / 100);
    return price;
}


console.log(applyDiscount(1000, 10));
console.log(applyDiscount(2000, 4));


