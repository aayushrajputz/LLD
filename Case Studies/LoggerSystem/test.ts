import { InfoLogger } from "./ConcreteLoggers.ts";
import { DebugLogger } from "./ConcreteLoggers.ts";
import { ErrorLogger } from "./ConcreteLoggers.ts";
import { LogLevel } from "./enums.ts";

const infoLogger = new InfoLogger();
const debugLogger = new DebugLogger();
const errorLogger = new ErrorLogger();

infoLogger.setNext(debugLogger).setNext(errorLogger)
infoLogger.log(LogLevel.INFO, "User logged in")
infoLogger.log(LogLevel.DEBUG, "DB query took 200ms")
infoLogger.log(LogLevel.ERROR, "Server crashed!")
