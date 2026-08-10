import { LogLevel } from "./enums.ts";
export abstract class Logger {
    protected nextLogger: Logger | null = null
    protected level: LogLevel

    constructor(level: LogLevel) {
        this.level = level
    }
    public setNext(logger: Logger): Logger {
        this.nextLogger = logger;
        return logger
    }
    public log(level: LogLevel, message: string): void {
        if (this.level <= level) {
            this.write(message);
        }
        if (this.nextLogger) {
            this.nextLogger.log(level, message)
        }
    }
    protected abstract write(message: string): void

} 