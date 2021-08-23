import { initializeCards } from "../../utils/helpers";
import { handleError } from "../../utils/display";

export const handleInitialize = (setPlayableDecks, setSpareDecks) => {
  try {
    const [playableDecks, spareDecks] = initializeCards();
    setPlayableDecks(playableDecks);
    setSpareDecks(spareDecks);
  } catch (err) {
    handleError(err);
  }
};
