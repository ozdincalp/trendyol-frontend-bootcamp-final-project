import { mapHints } from "../actions/index";
import { handleError } from "../../utils/display";

export const handleHints = (playableDecks, setHints) => {
  try {
    if (playableDecks.length > 0) {
      const newHints = mapHints(playableDecks.slice());
      setHints(newHints);
    }
  } catch (err) {
    handleError(err);
  }
};
