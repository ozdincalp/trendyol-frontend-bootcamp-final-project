import {removeCompletedDeck} from "../actions/index";

export const handleCompletedDeck = (deck, setDeck, deckID, setCompletedDeckCount) => {
    const sortedCardIDs = deck
    .filter((card) => card.isDraggable)
    .map((card) => card.id);

  if (sortedCardIDs.length === 13) {
     setDeck((prevState) => {
      const previousDecks = prevState;
      const newState = removeCompletedDeck(deckID, sortedCardIDs, previousDecks);
      return newState;
    })
     setCompletedDeckCount((prevState) => prevState + 1);
  }
}