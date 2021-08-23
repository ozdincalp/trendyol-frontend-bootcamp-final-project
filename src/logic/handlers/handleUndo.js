import { undoMove, removeDraggedCardsFromDeck } from "../actions/index";

export const handleUndo = (moves, playableDecks, setPlayableDecks, setMoves) => {
  if (moves.length > 0) {
    const { removedState, newMoves } = undoMove(
      moves.slice(),
      playableDecks.slice(),
    );
    setPlayableDecks(removedState);
    setMoves(newMoves);
  } else {
    alert("No more moves to take back!!!");
  }
};
