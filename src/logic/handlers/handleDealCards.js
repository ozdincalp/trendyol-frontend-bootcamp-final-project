
import { dealCardsFromSpare, removeSpareDeck } from "../actions/index";
import { handleError } from "../../utils/display";

export const handleDealCards = (deck, deckID, setDecks, setSpareDecks, setMoves) => {
  try {
    setDecks((prevState) => {
      const newState = dealCardsFromSpare(deck, prevState.slice());
      return newState;
    });
    setSpareDecks((prevState) => {
      const newState = removeSpareDeck(deckID, prevState.slice());
      return newState;
    });
    setMoves([]);
  } catch (err) {
    handleError(err);
  }
};
