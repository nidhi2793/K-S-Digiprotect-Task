import { useState } from "react";
import "./PlayArea.css";
import Board from "./Board";
import cellConfig from "../cellConfig";
import CONSTANTS from "../constant";

const PlayArea = ({
  numberOfPlayers,
  openDescription,
  setGameOn,
  isGameOn,
}) => {
  const [playerPostitions, setPlayerPositions] = useState(
    Array(numberOfPlayers).fill(0)
  );
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [diceNumber, setDiceNumber] = useState(null);

  const onDiceRoll = () => {
    let newNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(newNumber);
    console.log(newNumber);
    let newPosition = playerPostitions[currentPlayer] + newNumber;
    if (newPosition > 100) {
      alert("You rolled too high !! You can't pass 100");
    } else {
      if (cellConfig[newPosition]) {
        const { endIndex, type } = cellConfig[newPosition];
        newPosition = endIndex;
        const alertMessage =
          type === CONSTANTS.SNAKE
            ? `You got bitten by a snake!. Going back to ${newPosition}`
            : `You found a ladder. Going to ${newPosition}`;
        alert(alertMessage);
      }
      setPlayerPositions((prev) => {
        const positions = [...prev];
        positions[currentPlayer] = newPosition;
        return positions;
      });
    }
    if (newPosition === 100) {
      alert(`Player ${currentPlayer + 1} wins!`);
      setTimeout(() => setGameOn(false), 1000);
    } else {
      let newPlayer =
        currentPlayer + 1 === numberOfPlayers ? 0 : currentPlayer + 1;
      setCurrentPlayer(newPlayer);
    }
  };

  return (
    <div className="outer-container">
      <div className="board-container">
        <Board
          playerPostitions={playerPostitions}
          currentPlayer={currentPlayer}
          openDescription={openDescription}
        />
        <div className="dice-container">
          <button
            className="dice-btn"
            onClick={onDiceRoll}
            disabled={!isGameOn}
          >
            {diceNumber === null ? "Roll" : diceNumber}
          </button>
          {/* <h4>{diceNumber}</h4> */}
        </div>
      </div>
    </div>
  );
};

export default PlayArea;
