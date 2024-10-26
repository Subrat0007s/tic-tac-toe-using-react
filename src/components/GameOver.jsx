import React from "react";

export const GameOver = ({ winner,onRestart }) => {
  return (
    <div id="game-over">
      {winner && (
        <div>
          <h2>Game Over!</h2>
          <p>{winner} won!</p>
        </div>
      )}
      {!winner &&  <div>
          <h2>OOPS!</h2>
          <p>It's Draw!</p>
        </div>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
};
