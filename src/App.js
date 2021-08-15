import { useState, useEffect } from "react";
import {
  initializeCards,
  removeDraggedCardsFromDeck,
  moveClickedCards,
  undoMove,
  mapHints,
  showHint,
} from "./logic/index";
import { throwConfetti } from "./utils/index";
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
    const [playableDecks, spareDecks] = initializeCards();
    setPlayableDecks(playableDecks);
    setSpareDecks(spareDecks);
  }, []);

  useEffect(() => {
    moveClickedCards(
      clickMove,
      setClickMove,
      setMoves,
      playableDecks,
      setPlayableDecks
    );
  }, [clickMove, playableDecks, setPlayableDecks]);

  useEffect(() => {
    if (completedDeckCount === 8) {
      throwConfetti();
    }
  }, [completedDeckCount]);

  useEffect(() => {
    if (playableDecks.length > 0) {
      mapHints(setHints, playableDecks);
    }
  }, [playableDecks]);

  return (
    <div>
      <button
        onClick={() =>
          undoMove(
            moves,
            setMoves,
            setPlayableDecks,
            removeDraggedCardsFromDeck
          )
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
