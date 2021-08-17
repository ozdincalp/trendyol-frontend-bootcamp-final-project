import _ from "lodash";
import {v4 as uuidv4} from 'uuid';
import confetti from "canvas-confetti";

export const initializeCards = () => {
    const individualCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let totalCards = [];
    for (let i = 0; i < 8; i++) {
      totalCards = totalCards.concat(individualCards);
    }
    totalCards = _.shuffle(totalCards);
    const initialDecks = _.chunk(totalCards, 50);
    const [cardsToPlay, cardsToWait] = initialDecks;
  
    const cardsforDecks = _.chunk(cardsToPlay, 5);
  
    for (let i = 0; i < 4; i++) {
      cardsforDecks[i].push(initialDecks[2][i]);
    }
    const spareDecks = setCardProperties(_.chunk(cardsToWait, 10), true);
    const mappedDecks = setCardProperties(cardsforDecks, false);
  
    return [mappedDecks, spareDecks];
  };

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
};

export const checkMove = (card, deck) => {
  //console.log(item.deckID);
  // if (item.deckID === columnID) {
  //   return false;
  // } else 
  if (deck.length === 0) {
    return true;
  } else {
    return card.value - deck[deck.length - 1].value === 1;
  }
};
export const showHint =  (hints, playableDecks) => {
  const randomSource = Math.floor(Math.random() * hints.length);
  const sourceElementColumn = hints[randomSource].column;

  const randomTarget = Math.floor(Math.random() * hints[randomSource].values.length);
  const targetElementColumn = hints[randomSource].values[randomTarget];

  const sourceElementID = playableDecks[sourceElementColumn][playableDecks[sourceElementColumn].length - 1].id;
  const targetElementID = playableDecks[targetElementColumn][playableDecks[targetElementColumn].length - 1].id;

  const sourceElement = document.getElementById(sourceElementID);
  const targetElement = document.getElementById(targetElementID);
  sourceElement.classList.add("emphasized");
  setTimeout(() => {
    sourceElement.classList.remove("emphasized");
    targetElement.classList.add("emphasized");
    setTimeout(() => {
      targetElement.classList.remove("emphasized")
    }, 0.7 * 1000);
  }, 0.7 * 1000);
};