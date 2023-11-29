import { useState } from "react";
import PlayArea from "./Components/PlayArea";
import "./style.css";
import Modal from "./Components/Modal";
import GameStart from "./Components/GameStart";
import CONSTANTS from "./constant";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState(null);
  const [cellType, setCellType] = useState(null);
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
  const [invalidNumber, setInvalidNumber] = useState(null);
  const [isGameOn, setGameOn] = useState(false);

  const openDescription = (title, detail, type) => {
    setShowModal(true);
    setDescription(`${title} - ${detail}`);
    setCellType(type === CONSTANTS.SNAKE ? "snake" : "ladder");
  };

  const closeDescription = () => {
    setShowModal(false);
  };

  const submitNumberOfPlayers = (n) => {
    setNumberOfPlayers(n);
    setInvalidNumber(n < 2 || n > 4);
  };

  const startGame = () => {
    setGameOn(true);
  };

  return (
    <div className="game-container">
      {!isGameOn && (
        <GameStart
          numberOfPlayers={numberOfPlayers}
          submitNumberOfPlayers={submitNumberOfPlayers}
          startGame={startGame}
          invalidNumber={invalidNumber}
        />
      )}
      {isGameOn && showModal && description && (
        <Modal
          onClose={closeDescription}
          description={description}
          cellType={cellType}
        />
      )}
      {isGameOn && (
        <PlayArea
          setGameOn={setGameOn}
          isGameOn={isGameOn}
          openDescription={openDescription}
          numberOfPlayers={numberOfPlayers}
        />
      )}
    </div>
  );
}

export default App;
