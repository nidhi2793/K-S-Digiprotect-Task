import { useState } from "react";
import Board from "./Board";
import cellConfig from "../cellConfig";
import CONSTANTS from "../constant";

const PlayArea = ({ numberOfPlayers = 2 }) => {
  const [playerPostitions, setPlayerPositions] = useState(
    Array(numberOfPlayers).fill(0)
  );
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const onDiceRoll = () => {
    let diceNumber = Math.floor(Math.random() * 6) + 1;
    console.log(diceNumber);
    let newPosition = (playerPostitions[currentPlayer] += diceNumber);
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
    let newPlayer =
      currentPlayer + 1 === numberOfPlayers ? 0 : currentPlayer + 1;
    setCurrentPlayer(newPlayer);
  };

  return (
    <div>
      <Board
        playerPostitions={playerPostitions}
        currentPlayer={currentPlayer}
      />
      <span onClick={onDiceRoll}>Roll</span>
    </div>
  );
};

export default PlayArea;
