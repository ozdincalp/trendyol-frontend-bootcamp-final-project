export const undoMove = (moves, previousDecks, removeDraggedCardsFromDeck) => {
        const newState = previousDecks.slice();

        const {draggedCards, from, to, previousCard} = moves.slice().pop();
        const sourceColumn = newState[from];
        const lastElementIndex = sourceColumn.length -1;

        if(!sourceColumn.includes(draggedCards[0])){
          if(lastElementIndex !== -1) {
            sourceColumn[lastElementIndex].isOpen = previousCard.isOpen;
            sourceColumn[lastElementIndex].isDraggable = previousCard.isDraggable;
          }
          sourceColumn.push(...draggedCards);
        }
        
        const removedState = removeDraggedCardsFromDeck(to, draggedCards[0], previousDecks);

        const newMoves = moves.slice();
        newMoves.pop();

        return {
          removedState: removedState,
          newMoves: newMoves
        }
    }
