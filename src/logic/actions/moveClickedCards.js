import { addCardsToDeck } from "./index";

export const moveClickedCards = (clickMove, playableDecks) => {
  const elem = document.getElementById(clickMove[0].card.id);
  elem?.classList.remove("emphasized");

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
