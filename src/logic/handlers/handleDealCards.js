import { dealCardsFromSpare, removeSpareDeck } from "../actions/index";

export const handleDealCards = (deck, deckID, setDecks, setSpareDecks) => {
  setDecks((prevState) => {
    const newState = dealCardsFromSpare(deck, prevState.slice());
    return newState;
  });
  setSpareDecks((prevState) => {
    const newState = removeSpareDeck(deckID, prevState.slice());
    return newState;
  });
};
