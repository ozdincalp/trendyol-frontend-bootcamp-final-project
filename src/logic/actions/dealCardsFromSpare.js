import { handleError } from "../../utils/display";

export const dealCardsFromSpare = (deck, previousDecks) => {
  try {
    const newState = previousDecks;

    newState.forEach((oldDeck, index) => {
      const cardToDeal = deck[index];

      if (!oldDeck.includes(cardToDeal)) {
        if (oldDeck.length > 0) {
          if (cardToDeal.value - oldDeck[oldDeck.length - 1].value !== 1) {
            cardToDeal.blocking = true;
            oldDeck.forEach((card) => (card.isDraggable = false));
          }
        }
        oldDeck.push(cardToDeal);
      }
    });
    return newState;
  } catch (err) {
    handleError(err);
  }
};
