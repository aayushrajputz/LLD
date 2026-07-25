export interface PaymentStrategy {
    pay(amount: number): boolean;
}

export class UpiPayment implements PaymentStrategy {
    pay(amount: number): boolean {
        console.log(`Payment of ₹${amount} paid by UPI`);
        return true;
    }
}

export class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): boolean {
        console.log(`Payment of ₹${amount} paid by Credit Card`);
        return true;
    }
}

export class DebitCardPayment implements PaymentStrategy {
    pay(amount: number): boolean {
        console.log(`Payment of ₹${amount} paid by Debit Card`);
        return true;
    }
}

export class PaymentFactory {
    getPayment(type: string): PaymentStrategy {
        switch (type) {
            case "UPI": return new UpiPayment();
            case "CreditCard": return new CreditCardPayment();
            case "DebitCard": return new DebitCardPayment();
            default: throw new Error("Invalid payment type");
        }
    }
}
