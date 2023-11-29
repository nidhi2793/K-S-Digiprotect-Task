import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ onClose, description, cellType }) => {
  const handleModalClick = (event) => {
    if (!event.target.classList.contains("modal")) {
      onClose();
    }
  };

  console.log(cellType);

  return ReactDOM.createPortal(
    <div className="modal-container" onClick={handleModalClick}>
      <div className={`modal ${cellType === "snake" ? "bad" : "good"} `}>
        <div className="content">{description}</div>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default Modal;
