import { addCardsToDeck } from "./index";

export const moveClickedCards = (clickMove, playableDecks) => {
  const { newState, move } = addCardsToDeck(
    clickMove[1].deckID,
    clickMove[0].card,
    playableDecks
  );
  return {
    newPlayableDecks: newState,
    move: move,
  };
};
