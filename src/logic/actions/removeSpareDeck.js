import { handleError } from "../../utils/display";

export const removeSpareDeck = (id, prevState) => {
  try {
    const newState = prevState.filter((oldDeck, index) => {
      return index !== id;
    });
    return newState;
  } catch (err) {
    handleError(err);
  }
};
