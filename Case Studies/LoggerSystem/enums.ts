export const LogLevel = {
    INFO: 1,
    DEBUG: 2,
    ERROR: 3,

} as const
export type LogLevel = typeof LogLevel[keyof typeof LogLevel]