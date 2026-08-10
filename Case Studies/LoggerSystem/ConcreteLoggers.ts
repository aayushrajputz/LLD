import { Logger } from "./Logger.ts";
import { LogLevel } from "./enums.ts";
export class InfoLogger extends Logger {

    constructor() {
        super(LogLevel.INFO)  // Parent ko level bata do
    }
    protected write(message: string): void {
        console.log("[INFO]: " + message)
    }
}

export class DebugLogger extends Logger {
    constructor() {
        super(LogLevel.DEBUG)
    }
    protected write(message: string): void {
        console.log("[DEBUG]" + message)
    }
}

export class ErrorLogger extends Logger {
    constructor() {
        super(LogLevel.ERROR)
    }
    protected write(message: string): void {
        console.log("[ERROR]" + message);

    }
}