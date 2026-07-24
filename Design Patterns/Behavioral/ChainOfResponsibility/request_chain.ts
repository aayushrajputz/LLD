abstract class RequestHandler {
    protected nextHandler: RequestHandler | null = null

    public setNext(nextHandler: RequestHandler): RequestHandler {
        this.nextHandler = nextHandler;
        return nextHandler
    }

    public handle(request: string): string | null {
        if (this.nextHandler)
            return this.nextHandler.handle(request)
        return "sucess"
    }

}

class AuthHandler extends RequestHandler {
    public handle(request: string): string | null {
        console.log("[AUTH]: CHECKING TOKEN..");

        if (!request.includes("token=valid")) {
            return "error auth failed"

        }
        return super.handle(request)

    }
}

class ValidateHandler extends RequestHandler {
    public handle(request: string): string | null {
        console.log("[VALID]: VALIDATION DATA");

        if (!request.includes("data=valid")) {
            return " error validition failed"
        }
        return super.handle(request)
    }
}


class LoggerHandler extends RequestHandler {
    public handle(request: string): string | null {
        console.log(`[LOGGER]: incomming request -> ${request}`);
        return super.handle(request)
    }
}

const loggerHandler = new LoggerHandler();
const authHandler = new AuthHandler();
const validateHandler = new ValidateHandler();

// Chain: Logger -> Auth -> Validate
loggerHandler.setNext(authHandler).setNext(validateHandler);

// Test 1: Full Success
console.log("--- TEST 1: Full Success ---");
const result1 = loggerHandler.handle("token=valid,data=valid");
console.log("Result:", result1);

// Test 2: Auth Fails
console.log("\n--- TEST 2: Auth Fails ---");
const result2 = loggerHandler.handle("token=invalid,data=valid");
console.log("Result:", result2);

// Test 3: Validation Fails
console.log("\n--- TEST 3: Validation Fails ---");
const result3 = loggerHandler.handle("token=valid,data=invalid");
console.log("Result:", result3);

