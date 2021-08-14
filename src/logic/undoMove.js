export const undoMove = (moves, setMoves, setPlayableDecks, removeDraggedCardsFromDeck) => {
    if(moves.length > 0) {
      setPlayableDecks((prevState) => {
        const newState = prevState.slice();

        const {draggedCards, from, to, previousCard} = moves.slice().pop();
        const sourceColumn = newState[from];
        const lastElementIndex = sourceColumn.length -1;

        if(!sourceColumn.includes(draggedCards[0])){
          sourceColumn[lastElementIndex].isOpen = previousCard.isOpen;
          sourceColumn[lastElementIndex].isDraggable = previousCard.isDraggable;
          sourceColumn.push(...draggedCards);
        }
        
        removeDraggedCardsFromDeck(to, draggedCards[0],setPlayableDecks);
        return newState
      })
      setMoves((prevState) => {
        const newState = prevState.slice();
        newState.pop();
        return newState;
      });
    }
    else {
      alert("No more moves to take back!")
    }
  }