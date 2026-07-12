class Inventory {
    checkStock(itemId: number): boolean {
        console.log(`Checking stock for item ${itemId}`)
        return true;
    }
}

class Payment {
    FoodCharge(amount: number): void {
        console.log(`Charging food for amount ${amount}`)
    }
}

class Shipping {
    itemDelivered(itemId: Number): void {
        console.log(`Item delivered ${itemId}`)
    }
}
class Discount {
    applyDiscount(percentage: number, amount: number): number {
        const discount = amount - (amount * percentage / 100)
        console.log(`Discount applied: ${percentage}%. New amount: ${discount}`);
        return discount
    }
}

class OrderProcessingFacade {
    private inventory: Inventory;
    private payment: Payment;
    private shipping: Shipping
    private discount: Discount;

    constructor(inventory: Inventory, payment: Payment, shipping: Shipping, discount: Discount) {
        this.inventory = inventory;
        this.payment = payment;
        this.shipping = shipping;
        this.discount = discount;
    }
    placeOrder(itemId: number, amount: number): void {
        this.inventory.checkStock(itemId);
        const finalAmount = this.discount.applyDiscount(10, amount);
        this.payment.FoodCharge(finalAmount);
        this.shipping.itemDelivered(itemId);

    }

}




const inventory = new Inventory();
const payment = new Payment();
const shipping = new Shipping();
const discount = new Discount();

const orderProcessingFacade = new OrderProcessingFacade(inventory, payment, shipping, discount);
orderProcessingFacade.placeOrder(101, 1000);
