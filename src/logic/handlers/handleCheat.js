import { addCardsToDeck } from "../actions/index";

export const handleCheat = (showCheatColumn, setPlayableDecks) => {
  if (showCheatColumn) {
    setPlayableDecks((prevState) => {
      return [...prevState, []];
    });
    setTimeout(() => {
      setPlayableDecks((prevState) => {
        const randomColumnIndex = Math.floor(Math.random() * 10);
        let newDecks = prevState.slice();
        if(prevState[10].length > 0) {
            if(newDecks[randomColumnIndex].length > 0) {
                if (newDecks[10][0].value - newDecks[randomColumnIndex][newDecks[randomColumnIndex].length - 1].value !== 1) {
                    newDecks[randomColumnIndex].forEach((card) => (card.isDraggable = false));
                }
              }
            const { newState } = addCardsToDeck(
              randomColumnIndex,
              prevState[10][0],
              newDecks,
            );
            newDecks = newState;
        }
        newDecks.pop();
        return newDecks;
      });
    }, 8 * 1000);
  }
};
