import { initializeCards } from "../../utils/helpers";

export const handleInitialize = (setPlayableDecks, setSpareDecks) => {
    const [playableDecks, spareDecks] = initializeCards();
    setPlayableDecks(playableDecks);
    setSpareDecks(spareDecks);
}