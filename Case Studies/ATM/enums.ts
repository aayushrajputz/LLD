export const ATMStateName = {
    IDLE: "IDLE",
    HAS_CARD: "HAS_CARD",
    PIN_ENTERED: "PIN_ENTERED",


} as const
export type ATMStateName = typeof ATMStateName[keyof typeof ATMStateName];

export const TransactionType = {
    WITHDRAW: "WITHDRAW",
    DEPOSIT: "DEPOSIT",
    BALANCE_ENQUIRY: "BALANCE_ENQUIRY",


} as const;
export type TransactionType = typeof TransactionType[keyof typeof TransactionType];