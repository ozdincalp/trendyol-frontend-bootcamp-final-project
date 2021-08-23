import { getDraggedCards } from "../../utils/helpers";
import { handleError } from "../../utils/display";

export const addCardsToDeck = (columnID, card, previousDeck) => {
  try {
    const newState = previousDeck;
    const draggedCards = getDraggedCards(newState, card);
  
    const fromColumnIndex = newState.findIndex((deck) =>
      deck.includes(draggedCards[0])
    );
    const previousCardIndex = newState[fromColumnIndex].findIndex(
      (item) => item.id === card.id
    );
  
    const previousCard = newState[fromColumnIndex][previousCardIndex - 1];
  
    const previousCardData = {
      isOpen: previousCard ? previousCard.isOpen : false,
      isDraggable: previousCard ? previousCard.isDraggable : false,
    };
  
    newState[columnID] = [...newState[columnID], ...draggedCards];
  
    return {
      newState: newState,
      move: {
        draggedCards: draggedCards,
        from: fromColumnIndex,
        to: columnID,
        previousCard: previousCardData,
      },
    };
  } catch (err) {
    handleError(err);
  }
};
