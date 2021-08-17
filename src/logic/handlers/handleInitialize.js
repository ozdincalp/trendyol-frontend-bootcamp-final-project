import { initializeCards } from "../../utils/index";

export const handleInitialize = (setPlayableDecks, setSpareDecks) => {
    const [playableDecks, spareDecks] = initializeCards();
    setPlayableDecks(playableDecks);
    setSpareDecks(spareDecks);
}