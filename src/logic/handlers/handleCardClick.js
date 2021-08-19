export const handleCardClick = (card, deckID, setClickMove, setDeck) => {
    if(card.isDraggable) {
      setClickMove((prevState) => {
        return [...prevState, {card, deckID, setDeck}];
      })
    }
  }