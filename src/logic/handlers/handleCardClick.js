export const handleCardClick = (card, deckID, setClickMove, setDeck) => {
    if(card.isDraggable) {
      setClickMove((prevState) => {
        const newState = prevState.slice();
          newState.push({card, deckID, setDeck});
          return newState
      })
    }
  }