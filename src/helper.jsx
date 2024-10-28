import { WINNING_COMBINATIONS } from "./WINNING_COMBINATION.JS";

export const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const derivedActivePlayer = (gameTurns) => {
  return gameTurns.length > 0 && gameTurns[0].player === "X" ? "O" : "X";
};

export const deriveWinner = (gameBoard, players) => {
  for (const combination of WINNING_COMBINATIONS) {
    const [first, second, third] = combination.map(({ row, column }) => gameBoard[row][column]);
    if (first && first === second && first === third) {
      return players[first];
    }
  }
  return null;
};

export const derivedGameBoard = (gameTurns) => {
  const gameBoard = INITIAL_GAME_BOARD.map((row) => [...row]); // Deep Copy
  gameTurns.forEach(({ square: { row, col }, player }) => {
    gameBoard[row][col] = player;
  });
  return gameBoard;
};
