import { getDraggedCards } from "../utils/index";

export const addCardsToDeck = (columnID, card, setDeck) => {
  let cards;
  let index;
  let previousCardData;
  setDeck((prevState) => {
    const newState = prevState.slice();
    const draggedCards = getDraggedCards(newState, card);

    const fromColumnIndex = newState.findIndex((deck) =>
      deck.includes(draggedCards[0])
    );
    const previousCardIndex = newState[fromColumnIndex].findIndex(
      (item) => item.id === card.id
    );
    const previousCard = newState[fromColumnIndex][previousCardIndex - 1];

    previousCardData = {
      isOpen: previousCard ? previousCard.isOpen : false,
      isDraggable: previousCard ? previousCard.isDraggable: false,
    };
    
    cards = draggedCards;
    index = fromColumnIndex;

    newState[columnID] = [...newState[columnID], ...draggedCards];
    return newState;
  });
  return [cards, index, previousCardData];
};
