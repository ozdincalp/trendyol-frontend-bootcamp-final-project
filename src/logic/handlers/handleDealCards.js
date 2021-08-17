import { dealCardsFromSpare, removeSpareDeck } from "../actions/index";

export const handleDealCards = (deck, id, setDecks, setSpareDecks) => {
  setDecks((prevState) => {
    const newState = dealCardsFromSpare(deck, prevState);
    return newState;
  });
  setSpareDecks((prevState) => {
    const newState = removeSpareDeck(id, prevState);
    return newState;
  });
};
