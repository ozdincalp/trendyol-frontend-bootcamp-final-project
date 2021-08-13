import { useEffect } from "react";
import { useDrop } from "react-dnd";
import { addCardsToDeck, removeCompletedDeck } from "../../logic/index";
import DraggableCard from "../DraggableCard/DraggableCard";
import ImmovableCard from "../ImmovableCard/ImmovableCard";
import CardHolder from "../CardHolder/CardHolder";
import "./Column.scss";

const Column = ({ columnID, deck, setDeck, setCompletedDeckCount }) => {
  useEffect(() => {
    const sortedCardIDs = deck
      .filter((card) => card.isDraggable)
      .map((card) => card.id);

    if (sortedCardIDs.length === 3) {
      removeCompletedDeck(columnID, sortedCardIDs, setDeck);
      setCompletedDeckCount((prevState) => prevState + 1);
    }
  }, [deck, columnID, setCompletedDeckCount, setDeck]);

  const [, drop] = useDrop(() => ({
      accept: "card",
      drop: ({ card }) => addCardsToDeck(columnID, card, setDeck),
      canDrop: (item) => {
        if (item.deckID === columnID) {
          return false;
        } else if (deck.length === 0) {
          return true;
        } else {
          return item.card.value - deck[deck.length - 1].value === 1;
        }
      },
    }),[deck]);

  return (
    <div className="column-container" ref={drop}>
      {deck.length !== 0 ? (
        deck.map((card, index) => {
          if (card.isOpen) {
            return (
              <DraggableCard
                card={card}
                setDeck={setDeck}
                deckID={columnID}
                key={index}
              />
            );
          } else {
            return <ImmovableCard key={index} />;
          }
        })
      ) : (
        <CardHolder />
      )}
    </div>
  );
};

export default Column;
