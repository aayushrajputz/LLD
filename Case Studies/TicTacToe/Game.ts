import { Player } from "./Player.ts";
import { GameStatus, CellStatus } from "./enums.ts"
import { Board } from "./Board.ts";

export class Game {
    private board: Board;
    private players: [Player, Player];
    currentPlayerIndex: number;
    isGameOver: boolean;

    constructor(player1: Player, player2: Player) {
        this.board = new Board;
        this.currentPlayerIndex = 0
        this.isGameOver = false
        this.players = [player1, player2]
    }

    public playTurn(row: number, col: number): void {
        if (this.isGameOver) {
            console.log("Game is over!");
            return;
        }
        const currentPlayer = this.players[this.currentPlayerIndex];
        const moveSuccess = this.board.makeMove(row, col, currentPlayer.getSymbol());
        if (!moveSuccess) {
            console.log(`Invalid move by ${currentPlayer.getName()} at [${row}, ${col}]! Try again.`);
            return;
        }
        console.log(`${currentPlayer.getName()} played at [${row}, ${col}]`);
        // Check Win
        if (this.checkWin(currentPlayer.getSymbol())) {
            console.log(`🎉 ${currentPlayer.getName()} WINS! 🎉`);
            this.isGameOver = true;
            return;
        }
        // Check Draw
        if (this.board.isFull()) {
            console.log("🤝 Game ended in a DRAW!");
            this.isGameOver = true;
            return;
        }
        // Switch turn
        this.currentPlayerIndex = 1 - this.currentPlayerIndex;
    }
    private checkWin(symbol: CellStatus): boolean {
        const grid = this.board.getGrid();
        // Check Rows and Columns
        for (let i = 0; i < 3; i++) {
            if (grid[i][0] === symbol && grid[i][1] === symbol && grid[i][2] === symbol) return true;
            if (grid[0][i] === symbol && grid[1][i] === symbol && grid[2][i] === symbol) return true;
        }
        // Check Diagonals
        if (grid[0][0] === symbol && grid[1][1] === symbol && grid[2][2] === symbol) return true;
        if (grid[0][2] === symbol && grid[1][1] === symbol && grid[2][0] === symbol) return true;
        return false;
    }
}