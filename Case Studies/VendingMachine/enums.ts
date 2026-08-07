export const Coin = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25
} as const;

export type Coin = typeof Coin[keyof typeof Coin]; // returns 1 | 5 | 10 | 25

export const ItemType = {
    COKE: "COKE",
    PEPSI: "PEPSI",
    SODA: "SODA"
} as const;

export type ItemType = typeof ItemType[keyof typeof ItemType];
