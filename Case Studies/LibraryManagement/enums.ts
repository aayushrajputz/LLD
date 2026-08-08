export const BookStatus = {
    AVAILABLE: "AVAILABLE",
    ISSUED: "ISSUED",
    LOST: "LOST",
    RESERVED: "RESERVED"

} as const
export type BookStatus = typeof BookStatus[keyof typeof BookStatus];

export const AccountStatus = {
    ACTIVE: "ACTIVE",
    FROZEN: "FROZEN",
    CLOSED: "CLOSED"

} as const
export type AccountStatus = typeof AccountStatus[keyof typeof AccountStatus]


