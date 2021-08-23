import { handleInitialize } from "./handleInitialize";
import { handleError } from "../../utils/display";

export const handleReset = async (
  setPlayableDecks,
  setSpareDecks,
  setCompletedDeckCount,
  setClickMove,
  setMoves,
  setHints,
  setShowCheatColumn
) => {
  try {
    await setPlayableDecks([]);
    await setSpareDecks([]);
    await setCompletedDeckCount(0);
    await setClickMove([]);
    await setMoves([]);
    await setHints([]);
    await setShowCheatColumn(false);
    handleInitialize(setPlayableDecks, setSpareDecks);
  } catch (err) {
    handleError(err);
  }
};
