import { useState, useEffect } from "react";
import {
  handleInitialize,
  handleClickMove,
  handleUndo,
  handleHints,
  handleCheat,
} from "../../../logic/handlers/index";
import { showHint, throwConfetti } from "../../../utils/index";
import SpareDecks from "../../SpareDecks/SpareDecks";
import CompletedDecks from "../../CompletedDecks/CompletedDecks";
import Columns from "../../Columns/Columns";
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
  },[showCheatColumn])
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
    <div>
      <button
        onClick={() =>
          handleUndo(moves, playableDecks, setPlayableDecks, setMoves)
        }
      >
        Undo
      </button>
      <button onClick={() => showHint(hints, playableDecks)}>Show Hint</button>
      <div className="top-container">
        {spareDecks.length ? (
          <SpareDecks
            decks={spareDecks}
            setDecks={setPlayableDecks}
            setSpareDecks={setSpareDecks}
          />
        ) : null}
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
    </div>
  );
};