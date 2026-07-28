export const SplitType = {
    EQUAL: "EQUAL",
    EXACT: "EXACT",
    PERCENT: "PERCENT"
} as const;

export type SplitType = typeof SplitType[keyof typeof SplitType];