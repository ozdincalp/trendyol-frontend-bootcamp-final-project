import { useState, useEffect } from "react";
import {
  handleInitialize,
  handleClickMove,
  handleUndo,
  handleHints,
  handleCheat,
  handleReset
} from "../../../logic/handlers/index";
import { showHint, throwConfetti } from "../../../utils/index";
import SpareDecks from "../../SpareDecks/SpareDecks";
import CompletedDecks from "../../CompletedDecks/CompletedDecks";
import Columns from "../../Columns/Columns";
import GameControllers from "../../GameControllers/GameControllers";
import "./Game.scss";

export const Game = () => {
  const [playableDecks, setPlayableDecks] = useState([]);
  const [spareDecks, setSpareDecks] = useState([]);
  const [completedDeckCount, setCompletedDeckCount] = useState(0);
  const [clickMove, setClickMove] = useState([]);
  const [moves, setMoves] = useState([]);
  const [hints, setHints] = useState([]);
  const [showCheatColumn, setShowCheatColumn] = useState(false);

  useEffect(() => {
    handleInitialize(setPlayableDecks, setSpareDecks);
  }, []);

  useEffect(() => {
    handleCheat(showCheatColumn, setPlayableDecks);
  }, [showCheatColumn]);
  useEffect(() => {
    document.onkeypress = (e) => handleKeypress(e, playableDecks, moves, hints);
  }, [playableDecks, moves, hints]);

  const handleKeypress = (e, playableDecks, moves, hints) => {
    switch (e.key) {
      case "h":
        showHint(hints, playableDecks);
        break;
      case "u":
        handleUndo(moves, playableDecks, setPlayableDecks, setMoves);
        break;
      case "c":
        setShowCheatColumn(true);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    if (clickMove.length) {
      handleClickMove(
        clickMove,
        playableDecks,
        setPlayableDecks,
        setClickMove,
        setMoves
      );
    }
  }, [clickMove, playableDecks]);

  useEffect(() => {
    if (completedDeckCount === 8) {
      throwConfetti();
    }
  }, [completedDeckCount]);

  useEffect(() => {
    handleHints(playableDecks, setHints);
  }, [playableDecks]);

  return (
    <div className="game-container">
      <div className="top-container">
          <SpareDecks
            decks={spareDecks}
            setDecks={setPlayableDecks}
            setSpareDecks={setSpareDecks}
          />
        <CompletedDecks completedDeckCount={completedDeckCount} />
      </div>
      {playableDecks.length ? (
        <Columns
          decks={playableDecks}
          setDecks={setPlayableDecks}
          setCompletedDeckCount={setCompletedDeckCount}
          setClickMove={setClickMove}
          setMoves={setMoves}
        />
      ) : null}
      <GameControllers
        handleUndo={() =>
          handleUndo(moves, playableDecks, setPlayableDecks, setMoves)
        }
        handleHint={() => showHint(hints, playableDecks)}
        handleCheat={() => setShowCheatColumn(true)}
        handlePlayAgain={() =>
          handleReset(
            setPlayableDecks,
            setSpareDecks,
            setCompletedDeckCount,
            setClickMove,
            setMoves,
            setHints,
            setShowCheatColumn
          )
        }
      />
    </div>
  );
};
