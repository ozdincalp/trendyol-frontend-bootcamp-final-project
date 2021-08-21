import { handleInitialize } from "./handleInitialize";

export const handleReset = async(
  setPlayableDecks,
  setSpareDecks,
  setCompletedDeckCount,
  setClickMove,
  setMoves,
  setHints,
  setShowCheatColumn
) => {
  await setPlayableDecks([]);
  await setSpareDecks([]);
  await setCompletedDeckCount(0);
  await setClickMove([]);
  await setMoves([]);
  await setHints([]);
  await setShowCheatColumn(false);
  handleInitialize(setPlayableDecks, setSpareDecks);
};
