import { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {

  const [playableDecks, setPlayableDecks] = useState([]);
  const [spareDecks, setSpareDecks] = useState([]);
  const [hints, setHints] = useState([]);
  const [clickMove, setClickMove] = useState([]);
  const [moves, setMoves] = useState([]);
  const [showCheatColumn, setShowCheatColumn] = useState(false);
  const [completedDeckCount, setCompletedDeckCount] = useState(0);

  const store = {
    playableDecks: [playableDecks, setPlayableDecks],
    spareDecks: [spareDecks, setSpareDecks],
    hints: [hints, setHints],
    clickMove: [clickMove, setClickMove],
    moves: [moves, setMoves],
    showCheatColumn: [showCheatColumn, setShowCheatColumn],
    completedDeckCount: [completedDeckCount, setCompletedDeckCount],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
