import { handleError } from "../../utils/display";

export const handleCardClick = (card, deckID, setClickMove, setDeck) => {
  try {
    if (card.cardHolder || card.isDraggable) {
      setClickMove((prevState) => {
        return [...prevState, { card, deckID, setDeck }];
      });
    }
  } catch (err) {
    handleError(err);
  }
};
