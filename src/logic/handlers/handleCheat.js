import { addCardsToDeck } from "../actions/index";
import { handleError } from "../../utils/display";

export const handleCheat = async (showCheatColumn, setPlayableDecks) => {
  try {
    if (showCheatColumn) {
      await setPlayableDecks((prevState) => {
        return [...prevState, []];
      });

      const elem = document.getElementById("secret-column");
      elem.classList.add("highlight");
      setTimeout(() => {
        elem.classList.remove("highlight");
      }, 1.5 * 1000);
      
      setTimeout(() => {
        setPlayableDecks((prevState) => {
          const randomColumnIndex = Math.floor(Math.random() * 10);
          let newDecks = prevState.slice();
          if (prevState[10].length > 0) {
            if (newDecks[randomColumnIndex].length > 0) {
              if (
                newDecks[10][0].value -
                  newDecks[randomColumnIndex][
                    newDecks[randomColumnIndex].length - 1
                  ].value !==
                1
              ) {
                newDecks[randomColumnIndex].forEach(
                  (card) => (card.isDraggable = false)
                );
              }
            }
            const { newState } = addCardsToDeck(
              randomColumnIndex,
              prevState[10][0],
              newDecks
            );
            newDecks = newState;
          }
          newDecks.pop();
          return newDecks;
        });
      }, 10 * 1000);
    }
  } catch (err) {
    handleError(err);
  }
};
