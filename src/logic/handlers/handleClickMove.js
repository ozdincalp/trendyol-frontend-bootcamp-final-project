import {
  moveClickedCards,
  mapMoves,
  removeDraggedCardsFromDeck,
} from "../actions/index";
import { checkMove } from "../../utils/helpers";
import { handleError } from "../../utils/display";

export const handleClickMove = (
  clickMove,
  playableDecks,
  setPlayableDecks,
  setClickMove,
  setMoves
) => {
  try {
    const selectedElement = document.getElementById(clickMove[0].card.id);

    if (clickMove.length === 1) {
      selectedElement.classList.add("emphasized");
    }
    if (clickMove.length === 2) {
      selectedElement.classList.remove("emphasized");
      setClickMove([]);

      const value = checkMove(
        clickMove[0].card,
        playableDecks[clickMove[1].deckID],
        clickMove[1].deckID
      );
      console.log("checkMove value:", value);

      if (value) {
        const { newPlayableDecks, move } = moveClickedCards(
          clickMove,
          playableDecks.slice()
        );
        const { draggedCards, from, to, previousCard } = move;
        setPlayableDecks(newPlayableDecks);
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
        setPlayableDecks((previousDecks) => {
          const newState = removeDraggedCardsFromDeck(
            clickMove[0].deckID,
            clickMove[0].card,
            previousDecks.slice()
          );
          return newState;
        });
      }
    }
  } catch (err) {
    handleError(err);
  }
};
