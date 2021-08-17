import { addCardsToDeck, mapMoves } from "../actions/index";

export const handleDrop = async (setDeck, columnID, card, setMoves) => {
  let moveData;
  await setDeck((prevState) => {
    const { newState, move } = addCardsToDeck(columnID, card, prevState);
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
};
