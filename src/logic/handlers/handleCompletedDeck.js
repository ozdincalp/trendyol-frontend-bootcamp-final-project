import {removeCompletedDeck} from "../actions/index";

export const handleCompletedDeck = (deck, setDeck, columnID, setCompletedDeckCount) => {
    const sortedCardIDs = deck
    .filter((card) => card.isDraggable)
    .map((card) => card.id);

  if (sortedCardIDs.length === 13) {
    setDeck((previousDecks) => {
      const newState = removeCompletedDeck(columnID, sortedCardIDs, previousDecks);
      return newState;
    })
    setCompletedDeckCount((prevState) => prevState + 1);
  }
}