export const removeCompletedDeck = (id, sortedCardIDs, setDeck) => {
    setDeck((prevState) => {
      const newState = prevState.slice();
      const remainderDeck = newState[id].filter(
        (card) => !sortedCardIDs.includes(card.id)
      );

      const deckLength = remainderDeck.length;
      
      if (remainderDeck[deckLength - 1]) {
        remainderDeck[deckLength - 1].isOpen = true;
        remainderDeck[deckLength - 1].isDraggable = true;
      }
      newState[id] = remainderDeck;
      return newState;
    });
  };