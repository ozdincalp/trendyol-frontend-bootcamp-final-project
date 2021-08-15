export const mapMoves = (draggedCards, index, columnID, previousCard, setMoves) => {
    setMoves((prevState) => {
        if(prevState.length < 100) {
          const move = {
            draggedCards: draggedCards,
            from: index,
            to: columnID,
            previousCard: previousCard
          };
          return [...prevState, move]
        } else return prevState;
      });
};