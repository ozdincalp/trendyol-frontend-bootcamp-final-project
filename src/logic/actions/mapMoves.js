export const mapMoves = (draggedCards, index, columnID, previousCard, previousMoves) => {
        if(previousMoves.length < 100) {
          const move = {
            draggedCards: draggedCards,
            from: index,
            to: columnID,
            previousCard: previousCard
          };
          return [...previousMoves, move]
        } else return previousMoves;
      };