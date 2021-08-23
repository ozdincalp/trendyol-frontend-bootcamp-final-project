import { addCardsToDeck } from "./index";
import { handleError } from "../../utils/display";

export const moveClickedCards = (clickMove, playableDecks) => {
  try {
    const { newState, move } = addCardsToDeck(
      clickMove[1].deckID,
      clickMove[0].card,
      playableDecks
    );
    return {
      newPlayableDecks: newState,
      move: move,
    };
  } catch (err) {
    handleError(err);
  }
};
