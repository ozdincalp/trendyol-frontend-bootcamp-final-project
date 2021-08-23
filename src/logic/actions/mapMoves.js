import { handleError } from "../../utils/display";

export const mapMoves = (
  draggedCards,
  index,
  columnID,
  previousCard,
  previousMoves
) => {
  try {
    if (previousMoves.length < 100) {
      const move = {
        draggedCards: draggedCards,
        from: index,
        to: columnID,
        previousCard: previousCard,
      };
      return [...previousMoves, move];
    } else return previousMoves;
  } catch (err) {
    handleError(err);
  }
};
