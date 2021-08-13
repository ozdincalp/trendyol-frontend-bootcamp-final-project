import {v4 as uuidv4} from 'uuid';
import confetti from "canvas-confetti";


export const setCardProperties = (decks, isSpare) => {
  const mappedDecks = decks.map((deck) =>
    deck.map((card, index) => {
      const isCardOpen = isSpare || index === deck.length - 1;
      return {
        id: uuidv4(),
        value: card,
        isOpen: isCardOpen,
        isDraggable: isCardOpen,
      };
    })
  );
  return mappedDecks;
};

export const getDraggedCards = (state, card) => {
  const draggedColumn = state.find((deck) => deck.includes(card));
  const draggedCardIndex = draggedColumn.findIndex(
    (searchedCard) => searchedCard.id === card.id
  );
  const draggedCards = draggedColumn.slice(
    draggedCardIndex,
    draggedColumn.length
  );
  return draggedCards;
};

export const unblockDeck = (draggedColumn, card) => {
  const unblockedDeck = draggedColumn
    .filter((card) => card.isOpen)
    .slice()
    .reverse();
  for (let i = 0; i < unblockedDeck.length; i++) {
    if (unblockedDeck[i].blocking) break;
    unblockedDeck[i].isDraggable = true;
  }
  unblockedDeck.reverse();
  card.blocking = false;
  return unblockedDeck;
};

export const filterDraggedCards = (draggedColumn, newState, card) => {
  const draggedCards = getDraggedCards(newState, card);
  const draggedCardIDs = draggedCards.map((item) => item.id);
  const filteredColumn = draggedColumn.filter(
    (card) => !draggedCardIDs.includes(card.id)
  );
  return filteredColumn;
};

export const throwConfetti = () => {
  var duration = 5 * 1000;
  var colors = ['#bb0000', '#ffffff', "#000"];
  var end = Date.now() + duration;
  
  (function frame() {
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 110,
      origin: { x: 0 },
      colors:colors
    });
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 110,
      origin: { x: 1 },
      colors:colors
    });
  
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}