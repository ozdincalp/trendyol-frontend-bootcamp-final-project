import React from "react";
import "./GameControllers.scss";

const GameControllers = ({ handlePlayAgain, handleUndo, handleHint, handleCheat}) => {
  return (
    <div className="toolbox-container restart" data-testid="toolbox">
      <div className="game-controller tooltip restart" onClick={handlePlayAgain}>
      <span className="tooltiptext">Play again</span>
        <span className="toolbox-icon" style={{ fontSize: "40px" }}>
          <i className="far fa-play-circle"></i>
        </span>
      </div>
      <div className="game-controllers">
        <div className="game-controller tooltip undo" onClick={handleUndo}>
        <span className="tooltiptext">Undo</span>
          <span
            className="toolbox-icon"
            style={{ fontSize: "40px" }}
          >
            <i className="fas fa-undo-alt"></i>
          </span>
        </div>
        <div className="game-controller tooltip hint" onClick={handleHint}>
        <span className="tooltiptext">Hint</span>
          <span
            className="toolbox-icon"
            style={{ fontSize: "40px" }}
          >
            <i className="far fa-lightbulb"></i>
          </span>
        </div>
        <div className="game-controller tooltip cheat" onClick={handleCheat}>
        <span className="tooltiptext">Cheat</span>
          <span
            className="toolbox-icon"
            style={{ fontSize: "40px" }}
          >
            <i className="fas fa-user-secret"></i>
          </span>
        </div>
      </div>
      <div className="game-info tooltip info">
      <span className="tooltiptext">Info</span>
        <span className="toolbox-icon" style={{ fontSize: "40px" }}>
          <i className="fas fa-info-circle"></i>
        </span>
      </div>
    </div>
  );
};

export default GameControllers;
