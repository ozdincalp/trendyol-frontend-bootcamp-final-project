import { useState, useEffect } from "react";
import Columns from "./components/Columns/Columns";
import SpareDecks from "./components/SpareDecks/SpareDecks";
import { initializeCards } from "./utils/index";
import "./App.scss";

const App = () => {
  const [initialDecks, setInitialDecks] = useState([]);
  const [spareDecks, setSpareDecks] = useState([]);
  const [completedDeckCount, setCompletedDeckCount] = useState(0);

  useEffect(() => {
    const [initialDecks, spareDecks] = initializeCards();
    setInitialDecks(initialDecks);
    setSpareDecks(spareDecks);
  }, []);

  return (
    <div>
      <p>{completedDeckCount}</p>
      {spareDecks.length ? (
        <SpareDecks
          decks={spareDecks}
          setDecks={setInitialDecks}
          setSpareDecks={setSpareDecks}
        />
      ) : null}
      {initialDecks.length ? (
        <Columns
          decks={initialDecks}
          setDecks={setInitialDecks}
          setCompletedDeckCount={setCompletedDeckCount}
        />
      ) : null}
    </div>
  );
};

export default App;
