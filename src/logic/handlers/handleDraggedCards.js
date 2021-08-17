import { removeDraggedCardsFromDeck } from "../actions/index";

export const handleDraggedCards = (card, deckID, setDeck) => {
  setDeck((previousDeck) => {
    const newState = removeDraggedCardsFromDeck(deckID, card, previousDeck);
    return newState;
  });
};
