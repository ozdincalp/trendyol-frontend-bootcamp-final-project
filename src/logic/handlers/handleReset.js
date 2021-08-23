import { handleInitialize } from "./handleInitialize";
import { handleError } from "../../utils/display";

export const handleReset = async (
  setPlayableDecks,
  setSpareDecks,
  setCompletedDeckCount,
  setClickMove,
  setMoves,
  setHints,
  setShowCheatColumn,
  setTimer,
  setScore
) => {
  try {
    await setPlayableDecks([]);
    await setSpareDecks([]);
    await setCompletedDeckCount(0);
    await setClickMove([]);
    await setMoves([]);
    await setHints([]);
    await setShowCheatColumn(false);
    await setTimer("00:00:00");
    await setScore(0);
    handleInitialize(setPlayableDecks, setSpareDecks);
  } catch (err) {
    handleError(err);
  }
};
