import { undoMove } from "../actions/index";
import { handleError } from "../../utils/display";

export const handleUndo = (
  moves,
  playableDecks,
  setPlayableDecks,
  setMoves,
  setScore
) => {
  try {
    if (moves.length > 0) {
      const { removedState, newMoves } = undoMove(
        moves.slice(),
        playableDecks.slice()
      );
      setPlayableDecks(removedState);
      setMoves(newMoves);
      setScore((prevState) => prevState - 10);
    } else {
      alert("There is no move to take back!");
    }
  } catch (err) {
    handleError(err);
  }
};
