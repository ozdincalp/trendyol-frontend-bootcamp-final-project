import { addCardsToDeck, mapMoves } from "../actions/index";
import { handleError } from "../../utils/display";

export const handleDrop = async (setDeck, columnID, card, setMoves, setScore) => {
  try {
    let moveData;

    await setDeck((prevState) => {
      const { newState, move } = addCardsToDeck(
        columnID,
        card,
        prevState.slice()
      );
      moveData = move;
      return newState;
    });

    const { draggedCards, from, to, previousCard } = moveData;

    setMoves((previousMoves) => {
      const newState = mapMoves(
        draggedCards,
        from,
        to,
        previousCard,
        previousMoves
      );
      return newState;
    });
    setScore((prevState) => prevState + 10);
  } catch (err) {
    handleError(err);
  }
};
