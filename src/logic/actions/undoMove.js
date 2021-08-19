export const undoMove = (moves, previousDecks, removeDraggedCardsFromDeck) => {
        const {draggedCards, from, to, previousCard} = moves.slice().pop();
        const sourceColumn = previousDecks[from];
        const lastElementIndex = sourceColumn.length - 1;

        if(!sourceColumn.includes(draggedCards[0])){
          if(lastElementIndex !== -1) {
            const lastElement = sourceColumn[lastElementIndex];
            lastElement.isOpen = previousCard.isOpen;
            lastElement.isDraggable = previousCard.isDraggable;
          }
          sourceColumn.push(...draggedCards);
        }
        
        const removedState = removeDraggedCardsFromDeck(to, draggedCards[0], previousDecks);

        const newMoves = moves;
        newMoves.pop();

        return {
          removedState: removedState,
          newMoves: newMoves
        }
    }
