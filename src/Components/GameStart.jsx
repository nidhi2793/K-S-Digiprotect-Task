import React from "react";
import "./GameStart.css";

const GameStart = ({
  numberOfPlayers,
  invalidNumber,
  submitNumberOfPlayers,
  startGame,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <header className="header">
        {" "}
        {<img className="logo" src="Images/digi-small-logo.png" alt="" />}
        Welcome To Snake N Ladder
      </header>
      <div className="container">
        <label>Enter Number Of Players: </label>
        <input
          type="number"
          min="2"
          max="4"
          value={numberOfPlayers}
          onChange={(e) => submitNumberOfPlayers(Number(e.target.value))}
          placeholder="Enter number of players (2-4)"
          className="input-field"
        />
        {invalidNumber && (
          <p className="error-message">
            Please select number of players between 2 to 4
          </p>
        )}
        <button
          disabled={invalidNumber}
          onClick={startGame}
          className="start-button"
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default GameStart;
