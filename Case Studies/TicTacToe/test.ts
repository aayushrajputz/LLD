import { Game } from "./Game.ts";
import { Player } from "./Player.ts";
import { CellStatus } from "./enums.ts";

// Create Players
const player1 = new Player("Aayush", CellStatus.X);
const player2 = new Player("Akash", CellStatus.O);

// Initialize Game
const game = new Game(player1, player2);

console.log("🎮 --- Starting Tic Tac Toe Simulation --- 🎮");

// Play turns to simulate a win for Aayush (Diagonal: [0,0], [1,1], [2,2])
game.playTurn(0, 0); // Aayush plays X at [0, 0]
game.playTurn(0, 1); // Akash plays O at [0, 1]

game.playTurn(1, 1); // Aayush plays X at [1, 1]
game.playTurn(0, 2); // Akash plays O at [0, 2]

game.playTurn(2, 2); // Aayush plays X at [2, 2] -> Should Win!

// Try to play turn after game finished (should show warning)
game.playTurn(1, 2);
