import { useState, useEffect } from "react";
import { initializeCards } from "./logic/index";
import Columns from "./components/Columns/Columns";
import SpareDecks from "./components/SpareDecks/SpareDecks";
import "./App.scss";

const App = () => {
  const [playableDecks, setPlayableDecks] = useState([]);
  const [spareDecks, setSpareDecks] = useState([]);
  const [completedDeckCount, setCompletedDeckCount] = useState(0);

  useEffect(() => {
    const [playableDecks, spareDecks] = initializeCards();
    setPlayableDecks(playableDecks);
    setSpareDecks(spareDecks);
  }, []);

  return (
    <div>
      <p>{completedDeckCount}</p>
      {spareDecks.length ? (
        <SpareDecks
          decks={spareDecks}
          setDecks={setPlayableDecks}
          setSpareDecks={setSpareDecks}
        />
      ) : null}
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
