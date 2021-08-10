import { useState } from "react";
import { useDrop } from "react-dnd";
import "./Column.scss";
import DraggableCard from "../DraggableCard/DraggableCard";
import ImmovableCard from "../ImmovableCard/ImmovableCard";

const Column = ({ deck, id }) => {
  const [playableDeck, setPlayableDeck] = useState(deck);

  const [{ isOVer }, drop] = useDrop(() => ({
    accept: "card",
    drop: ({ card }) => addCardsToDeck(card),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    canDrop: (item, monitor) => {
      return item.deckID !== id;
    },
  }));

  const addCardsToDeck = (card) => {
    setPlayableDeck((prevState) => [...prevState, card]);
  };

  return (
    <div className="column-container" ref={drop} id={id}>
      {playableDeck.map((card, index) => {
        if (card.isLastCard) {
          return (
            <DraggableCard
              card={card}
              setDeck={setPlayableDeck}
              canDrag={card.isLastCard}
              deckID={id}
              key={index}
            />
          );
        } else {
          return <ImmovableCard key={index} />;
        }
      })}
    </div>
  );
};

export default Column;
