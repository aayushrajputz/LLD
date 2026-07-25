// 1. Enums
export const SeatCategory = {
    SILVER: "SILVER",
    GOLD: "GOLD",
    PLATINUM: "PLATINUM"
} as const;
export type SeatCategory = typeof SeatCategory[keyof typeof SeatCategory];

export const SeatStatus = {
    AVAILABLE: "AVAILABLE",
    LOCKED: "LOCKED",
    BOOKED: "BOOKED"
} as const;
export type SeatStatus = typeof SeatStatus[keyof typeof SeatStatus];

export const BookingStatus = {
    PENDING: "PENDING",
    CONFIRMED: "CONFIRMED",
    CANCELLED: "CANCELLED"
} as const;
export type BookingStatus = typeof BookingStatus[keyof typeof BookingStatus];


