import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
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

export const checkMove = (card, deck) => {
  const targetCard = deck[deck.length - 1];
  return deck.length === 0 || card.value - targetCard.value === 1;
};