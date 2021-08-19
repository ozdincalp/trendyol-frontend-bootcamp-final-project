import { useState, useEffect } from "react";
import {
  handleInitialize,
  handleClickMove,
  handleUndo,
  handleHints,
} from "./logic/handlers/index";
import { showHint, throwConfetti } from "./utils/index";
import SpareDecks from "./components/SpareDecks/SpareDecks";
import CompletedDecks from "./components/CompletedDecks/CompletedDecks";
import Columns from "./components/Columns/Columns";
import "./App.scss";

const App = () => {
  const [playableDecks, setPlayableDecks] = useState([]);
  const [spareDecks, setSpareDecks] = useState([]);
  const [completedDeckCount, setCompletedDeckCount] = useState(0);
  const [clickMove, setClickMove] = useState([]);
  const [moves, setMoves] = useState([]);
  const [hints, setHints] = useState([]);

  useEffect(() => {
    handleInitialize(setPlayableDecks, setSpareDecks);
  }, []);

  useEffect(() => {
    if(clickMove.length) {
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

export default App;
