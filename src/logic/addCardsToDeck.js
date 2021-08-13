import { getDraggedCards } from '../utils/index'

export const addCardsToDeck = (columnID, card, setDeck) => {
    setDeck((prevState) => {
      const newState = prevState.slice();
      const draggedCards = getDraggedCards(newState, card);
      newState[columnID] = [...newState[columnID], ...draggedCards];
      return newState;
    });
  };