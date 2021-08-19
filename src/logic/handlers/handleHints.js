import { mapHints } from "../actions/index";

export const handleHints = (playableDecks, setHints) => {
  if (playableDecks.length > 0) {
    const newHints = mapHints(playableDecks.slice());
    setHints(newHints);
  }
};
