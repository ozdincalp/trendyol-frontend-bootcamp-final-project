import React from "react";
import CardImage from "../../assets/card-back.png";

const SpareDeck = ({ id, deck, setDecks, setSpareDecks }) => {
  const handleClick = (e) => {
    setDecks((prevState) => {
      const newState = prevState;
      newState.forEach((oldDeck, index) => {
        if (!oldDeck.includes(deck[index])) {
          if (deck[index].value - oldDeck[oldDeck.length - 1].value !== 1) {
            oldDeck.forEach((card) => (card.isDraggable = false));
          }
          oldDeck.push(deck[index]);
        }
      });
      return newState;
    });
    setSpareDecks((prevState) => {
      const newState = prevState.filter((oldDeck, index) => {
        return index !== id;
      });
      return newState;
    });
  };
  return (
    <img
      width="135px"
      height="135px"
      src={CardImage}
      alt=""
      draggable="false"
      onClick={handleClick}
    />
  );
};

export default SpareDeck;
