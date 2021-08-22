import React from "react";
import "./GameControllers.scss";

const GameControllers = ({ handlePlayAgain, handleUndo, handleHint, handleCheat}) => {
  return (
    <div className="toolbox-container">
      <div className="game-restart tooltip">
      <span className="tooltiptext">Play again</span>
        <span className="toolbox-icon" onClick={handlePlayAgain} style={{ fontSize: "40px" }}>
          <i className="far fa-play-circle"></i>
        </span>
      </div>
      <div className="game-controllers">
        <div className="game-controller tooltip">
        <span className="tooltiptext">Undo</span>
          <span
            className="toolbox-icon"
            onClick={handleUndo}
            style={{ fontSize: "40px" }}
          >
            <i className="fas fa-undo-alt"></i>
          </span>
        </div>
        <div className="game-controller tooltip">
        <span className="tooltiptext">Hint</span>
          <span
            className="toolbox-icon"
            onClick={handleHint}
            style={{ fontSize: "40px" }}
          >
            <i className="far fa-lightbulb"></i>
          </span>
        </div>
        <div className="game-controller tooltip">
        <span className="tooltiptext">Cheat</span>
          <span
            className="toolbox-icon"
            onClick={handleCheat}
            style={{ fontSize: "40px" }}
          >
            <i className="fas fa-user-secret"></i>
          </span>
        </div>
      </div>
      <div className="game-info tooltip">
      <span className="tooltiptext">Info</span>
        <span className="toolbox-icon" style={{ fontSize: "40px" }}>
          <i className="fas fa-info-circle"></i>
        </span>
      </div>
    </div>
  );
};

export default GameControllers;
