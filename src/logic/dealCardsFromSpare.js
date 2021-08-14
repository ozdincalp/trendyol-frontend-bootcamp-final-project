export const dealCardsFromSpare = (deck, setDecks) => {
    setDecks((prevState) => {
      const newState = prevState.slice();
      newState.forEach((oldDeck, index) => {
        if (!oldDeck.includes(deck[index])) {
          if(oldDeck.length > 0) {
            if (deck[index].value - oldDeck[oldDeck.length - 1].value !== 1) {
              deck[index].blocking = true;
              oldDeck.forEach((card) => (card.isDraggable = false));
            }
          }
          oldDeck.push(deck[index]);
        }
      });
      return newState;
    });
  };