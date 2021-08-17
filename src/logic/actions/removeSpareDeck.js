export const removeSpareDeck = (id, prevState) => {
      const newState = prevState.filter((oldDeck, index) => {
        return index !== id;
      });
      return newState;
    };