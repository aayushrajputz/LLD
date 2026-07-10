interface PaymentProcessor {
    processPayment(amount: number): void

}

class oldPaymentProcessor {
    makeTransation(amount: number): void {
        console.log(`Old Payment Processor: ${amount}`)
    }
}

class paymentAdapter implements PaymentProcessor {
    oldPaymentProcessor: oldPaymentProcessor

    constructor(oldPaymentProcessor: oldPaymentProcessor) {
        this.oldPaymentProcessor = oldPaymentProcessor
    }

    processPayment(amount: number): void {
        this.oldPaymentProcessor.makeTransation(amount)
    }

}

// Client Code — Direct OldPaymentProcessor use nahi karega
// Sirf PaymentProcessor interface ke through kaam karega
const oldGateway = new oldPaymentProcessor();
const adapter = new paymentAdapter(oldGateway);

// Client calls adapter.processPayment() — doesn't know about old gateway internally
adapter.processPayment(500);
adapter.processPayment(1200);
