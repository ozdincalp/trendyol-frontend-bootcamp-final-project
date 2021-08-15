import {checkMove} from "../utils/index";
import {addCardsToDeck, removeDraggedCardsFromDeck, mapMoves} from "./index";

export const moveClickedCards = async(clickMove, setClickMove, setMoves, playableDecks, setPlayableDecks) =>{
      
    if(clickMove.length === 1) {
      const elem = document.getElementById(clickMove[0].card.id);
      elem.classList.add('emphasized');
    }
    if(clickMove.length === 2){
      const elem = document.getElementById(clickMove[0].card.id);
      elem.classList.remove('emphasized');
      const value = checkMove(clickMove[0].card, playableDecks[clickMove[1].deckID], clickMove[1].deckID);
      if(value) {
        const [draggedCards, index, previousCard] = await addCardsToDeck(clickMove[1].deckID, clickMove[0].card, setPlayableDecks);
        mapMoves(draggedCards, index, clickMove[1].deckID, previousCard, setMoves);
        removeDraggedCardsFromDeck(clickMove[0].deckID, clickMove[0].card, setPlayableDecks);
      }
      setClickMove([]);
    }
  };