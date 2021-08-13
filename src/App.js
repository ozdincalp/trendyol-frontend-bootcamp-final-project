import { useState, useEffect } from "react";
import { initializeCards } from "./logic/index";
import { throwConfetti } from "./utils/index";
import SpareDecks from "./components/SpareDecks/SpareDecks";
import CompletedDecks from "./components/CompletedDecks/CompletedDecks";
import Columns from "./components/Columns/Columns";
import "./App.scss";

const App = () => {
  const [playableDecks, setPlayableDecks] = useState([]);
  const [spareDecks, setSpareDecks] = useState([]);
  const [completedDeckCount, setCompletedDeckCount] = useState(7);

  useEffect(() => {
    const [playableDecks, spareDecks] = initializeCards();
    setPlayableDecks(playableDecks);
    setSpareDecks(spareDecks);
  }, []);

  useEffect(() => {
    if (completedDeckCount === 8) {
      throwConfetti();
    }
  }, [completedDeckCount]);

  return (
    <div>
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
        />
      ) : null}
    </div>
  );
};

export default App;
