import React from "react";
import { Player } from "./Player";

const PlayerList = ({ players, activePlayer, onChangeName }) => (
  <ol id="players" className="highlight-player">
    <Player
      initialName={players.X}
      symbol="X"
      isActive={activePlayer === "X"}
      onChangeName={onChangeName}
    />
    <Player
      initialName={players.O}
      symbol="O"
      isActive={activePlayer === "O"}
      onChangeName={onChangeName}
    />
  </ol>
);

export default PlayerList;
