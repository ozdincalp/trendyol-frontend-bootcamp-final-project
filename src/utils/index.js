import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import confetti from "canvas-confetti";
import { CARD_VALUES, TOTAL_DECKS_COUNT } from "../gameConfig";

export const initializeCards = () => {
  const individualCards = Object.keys(CARD_VALUES);

  let totalCards = [];
  for (let i = 0; i < TOTAL_DECKS_COUNT; i++) {
    totalCards = totalCards.concat(individualCards);
  }
  const [playableDecks, spareDecks] = setAllDecks(totalCards);

  return [playableDecks, spareDecks];
};

const setPlayableDecks = (cardsToPlay, leftoverCards) => {
  const decks = _.chunk(cardsToPlay, 5);

  leftoverCards.forEach((card, index) => {
    decks[index].push(card);
  });

  const mappedDecks = setCardProperties(decks, false);
  return mappedDecks;
};
const setAllDecks = (totalCards) => {
  const shuffledCards = _.shuffle(totalCards);
  const [cardsToPlay, cardsToWait, leftoverCards] = _.chunk(shuffledCards, 50);

  const playableDecks = setPlayableDecks(cardsToPlay, leftoverCards);
  const spareDecks = setCardProperties(_.chunk(cardsToWait, 10), true);

  return [playableDecks, spareDecks];
};

const setCardProperties = (decks, isSpare) => {
  const mappedDecks = decks.map((deck) =>
    deck.map((card, index) => {
      const isCardOpen = isSpare || index === deck.length - 1;
      return {
        id: uuidv4(),
        value: +card,
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
    //.filter((card) => card.isOpen)
    .slice()
    .reverse();
  for (let i = 0; i < unblockedDeck.length; i++) {
    if (unblockedDeck[i].blocking) break;
    if (unblockedDeck[i].isOpen) {
      unblockedDeck[i].isDraggable = true;
    }
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
  var colors = ["#bb0000", "#ffffff", "#000"];
  var end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 110,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 110,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

export const checkMove = (card, deck) => {
  const targetCard = deck[deck.length - 1];
  return deck.length === 0 || card.value - targetCard.value === 1;
};

export const showHint = (hints, playableDecks, spareDecks) => {
  if(!hints.length > 0) {
      if(spareDecks.length > 0) {
        const elem = document.getElementById("spare_decks");
        elem.classList.add("highlighted");
        setTimeout(() => {
          elem.classList.remove("highlighted")
        }, 1 * 1000);
      }
  } else {

    const randomIndex = Math.floor(Math.random() * hints.length);
    if(hints[randomIndex]) {
      const sourceElementColumn = hints[randomIndex].column;
  
    const randomTarget = Math.floor(
      Math.random() * hints[randomIndex].values.length
    );
    const targetElementColumn = hints[randomIndex].values[randomTarget];
  
    const sourceElementID =
      playableDecks[sourceElementColumn][
        playableDecks[sourceElementColumn].length - 1
      ].id;
    const targetElementID =
      playableDecks[targetElementColumn][
        playableDecks[targetElementColumn].length - 1
      ].id;
  
    const sourceElement = document.getElementById(sourceElementID);
    const targetElement = document.getElementById(targetElementID);
  
    const sourceElementPosition = sourceElement.getBoundingClientRect();
    const targetElementPosition = targetElement.getBoundingClientRect();
  
    const shiftX = targetElementPosition.left - sourceElementPosition.left;
    const shiftY = targetElementPosition.top - sourceElementPosition.top;
    sourceElement.animate(
      [
        // keyframes
        {
          transform: `translate(${shiftX}px, ${shiftY}px)`,
          backgroundColor: "lightgray",
          zIndex: "9999",
        },
      ],
      {
        // timing options
        duration: 1200,
      }
    );
  
    sourceElement.classList.add("emphasized");
    setTimeout(() => {
      sourceElement.classList.remove("emphasized");
      targetElement.classList.add("emphasized");
      setTimeout(() => {
        targetElement.classList.remove("emphasized");
      }, 0.5 * 1000);
    }, 1 * 1000);
    }
  }
  
};
