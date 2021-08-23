import { removeDraggedCardsFromDeck } from "../actions/index";
import { handleError } from "../../utils/display";

export const handleDraggedCards = (card, deckID, setDeck) => {
  try {
    setDeck((previousDeck) => {
      const newState = removeDraggedCardsFromDeck(
        deckID,
        card,
        previousDeck.slice()
      );
      return newState;
    });
  } catch (err) {
    handleError(err);
  }
};
