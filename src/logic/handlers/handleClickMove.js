import {
  moveClickedCards,
  mapMoves,
  removeDraggedCardsFromDeck,
} from "../actions/index";
import { checkMove } from "../../utils/index";

export const handleClickMove = async (
  clickMove,
  playableDecks,
  setPlayableDecks,
  setClickMove,
  setMoves
) => {
  if (clickMove.length === 1) {
    const elem = document.getElementById(clickMove[0].card.id);
    elem?.classList.add("emphasized");
  }
  if (clickMove.length === 2) {
    const { newPlayableDecks, move } = moveClickedCards(
      clickMove,
      playableDecks
    );
    await setClickMove([]);
    const value = checkMove(
      clickMove[0].card,
      playableDecks[clickMove[1].deckID],
      clickMove[1].deckID
    );
    if (value) {
      const { draggedCards, from, to, previousCard } = move;
      await setPlayableDecks(newPlayableDecks);
      await setMoves((previousMoves) => {
        const newState = mapMoves(
          draggedCards,
          from,
          to,
          previousCard,
          previousMoves
        );
        return newState;
      });
      await setPlayableDecks((previousDecks) => {
        const newState = removeDraggedCardsFromDeck(
          clickMove[0].deckID,
          clickMove[0].card,
          previousDecks
        );
        return newState;
      });
    }
  }
};
