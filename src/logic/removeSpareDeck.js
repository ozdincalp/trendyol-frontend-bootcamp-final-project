export const removeSpareDeck = (id, setSpareDecks) => {
    setSpareDecks((prevState) => {
      const newState = prevState.filter((oldDeck, index) => {
        return index !== id;
      });
      return newState;
    });
  };