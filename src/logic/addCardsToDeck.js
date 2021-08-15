import { getDraggedCards } from "../utils/index";

export const addCardsToDeck = async(columnID, card, setDeck) => {
  let cards;
  let index;
  let previousCardData;
  await setDeck((prevState) => {
    const newState = prevState.slice();
    const draggedCards = getDraggedCards(newState.slice(), card);

    const fromColumnIndex = newState.findIndex((deck) =>
      deck.includes(draggedCards[0])
    );
    const previousCardIndex = newState[fromColumnIndex].findIndex(
      (item) => item.id === card.id
    );

    cards = draggedCards.slice();
    index = fromColumnIndex;
    const previousCard = newState[fromColumnIndex][previousCardIndex - 1];

    previousCardData = {
      isOpen: previousCard ? previousCard.isOpen : false,
      isDraggable: previousCard ? previousCard.isDraggable : false,
    };
    
    newState[columnID] = [...newState[columnID], ...draggedCards];
    console.log(draggedCards);
    console.log(fromColumnIndex)
    return newState;
  });

  return [cards, index, previousCardData];
};
