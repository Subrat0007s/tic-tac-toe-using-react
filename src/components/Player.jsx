import React, { useState } from "react";

export const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  let [isEditing, setIsEditing] = useState(false);
  let [playerName, setPlayerName] = useState(initialName);
  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing); //false=>true
    // setIsEditing((editing) => !editing);      //true=>false
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  function handleChange(e) {
    setPlayerName(e.target.value);
  }
  let editPlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = "Edit";
  if (isEditing) {
    editPlayerName = (
      <input
        type="text"
        value={playerName}
        id=""
        onChange={handleChange}
        required
      />
    );
    // btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};
