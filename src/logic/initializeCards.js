import _ from "lodash";
import {setCardProperties} from '../utils/index'

export const initializeCards = () => {
    const individualCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let totalCards = [];
    for (let i = 0; i < 8; i++) {
      totalCards = totalCards.concat(individualCards);
    }
    totalCards = _.shuffle(totalCards);
    const initialDecks = _.chunk(totalCards, 50);
    const [cardsToPlay, cardsToWait] = initialDecks;
  
    const cardsforDecks = _.chunk(cardsToPlay, 5);
  
    for (let i = 0; i < 4; i++) {
      cardsforDecks[i].push(initialDecks[2][i]);
    }
    const spareDecks = setCardProperties(_.chunk(cardsToWait, 10), true);
    const mappedDecks = setCardProperties(cardsforDecks, false);
  
    return [mappedDecks, spareDecks];
  };