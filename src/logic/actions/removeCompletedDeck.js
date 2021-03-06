import { handleError } from "../../utils/display";

export const removeCompletedDeck = (deckID, sortedCardIDs, previousDecks) => {
  try {
    const newState = previousDecks;
    const remainderDeck = newState[deckID].filter(
      (card) => !sortedCardIDs.includes(card.id)
    );

    const lastIndex = remainderDeck.length - 1;
    const lastCard = remainderDeck[lastIndex];

    if (lastCard) {
      lastCard.isOpen = true;
      lastCard.isDraggable = true;
    }

    newState[deckID] = remainderDeck;
    return newState;
  } catch (err) {
    handleError(err);
  }
};
