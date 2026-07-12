// ========================================================
// STATE DESIGN PATTERN (BEHAVIORAL)
// ========================================================
// Definition: Allow an object to alter its behavior when its internal state changes.
// Enforces: Single Responsibility Principle (SRP) by segregating state-specific logic.

// 1. State Common Interface
interface OrderState {
    next(order: Order): void;
    cancel(order: Order): void;
    status(): string;

}

// 2. Context Class (The order which has a state)
class Order {
    private currentState: OrderState;

    constructor() {
        // Default initial state
        this.currentState = new PendingState();
    }

    setState(state: OrderState): void {
        this.currentState = state;
    }

    getState(): string {
        return this.currentState.status();
    }

    nextState(): void {
        this.currentState.next(this);
    }
    cancelState(): void {
        this.currentState.cancel(this);
    }
}

// 3. Concrete State A (Pending)
class PendingState implements OrderState {
    next(order: Order): void {
        console.log("Order processed. Transitioning from PENDING to SHIPPED.");
        order.setState(new ShippedState());
    }
    status(): string {
        return "pending";
    }
    cancel(order: Order): void {
        console.log("Order is in PENDING state. Cancelling order now...");
        order.setState(new CancelledState());
    }

}

// 4. Concrete State B (Shipped)
class ShippedState implements OrderState {
    next(order: Order): void {
        console.log("Order delivered. Transitioning from SHIPPED to DELIVERED.");
        order.setState(new DeliveredState());
    }
    status(): string {
        return "shipped";
    }
    cancel(order: Order): void {
        console.log("Error: Cannot cancel order! It has already been SHIPPED.");
        // ❌ State change nahi kiya
    }


}

// 5. Concrete State C (Delivered)
class DeliveredState implements OrderState {
    next(order: Order): void {
        console.log("Order is already in delivered state. Cannot transition further.");
    }
    status(): string {
        return "delivered";
    }
    cancel(order: Order): void {
        console.log("Error: Cannot cancel order! It is already DELIVERED.");
        // ❌ State change nahi kiya
    }


}

// 6. Concrete State D (Cancelled - Ready for future extension)
class CancelledState implements OrderState {
    next(order: Order): void {
        console.log("Order is cancelled. Cannot process further.");
    }

    cancel(order: Order): void {
        console.log("Order is already cancelled.");
    }

    status(): string {
        return "cancelled";
    }
}


// ========================================================
// --- Client Execution ---
// ========================================================
console.log("\n--- New Order Test (Cancel in Pending) ---");
const freshOrder = new Order();
console.log(`Current Status: ${freshOrder.getState()}`); // pending

freshOrder.cancelState(); // PENDING state se CANCEL hona chahiye!
console.log(`Current Status: ${freshOrder.getState()}`); // cancelled

freshOrder.nextState();   // Cancelled state block check

