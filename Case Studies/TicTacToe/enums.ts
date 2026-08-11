


export const CellStatus = {
    empty: 'Empty',
    X: 'X',
    O: 'O'
} as const
export type CellStatus = (typeof CellStatus)[keyof typeof CellStatus]


export const GameStatus = {
    IN_PROGRESS: "IN_PROGRESS",
    WIN: "WIN",
    DRAW: "DRAW"

} as const
export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus] 