import { filterDraggedCards, unblockDeck } from '../../utils/index'

export const removeDraggedCardsFromDeck = (deckID, card, previousDeck) => {
 
      const newState = previousDeck;
  
      const draggedColumn = newState[deckID];
      let filteredColumn = filterDraggedCards(draggedColumn, newState, card)
      let deckLength = filteredColumn.length;
  
      if (filteredColumn[deckLength - 1]) {
        if (card.blocking) {
          filteredColumn = unblockDeck(filteredColumn, card);
        }
        deckLength = filteredColumn.length;
        filteredColumn[deckLength - 1].isOpen = true;
        filteredColumn[deckLength - 1].isDraggable = true;
      }
      newState[deckID] = filteredColumn;
      return newState;
    };