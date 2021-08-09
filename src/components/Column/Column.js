import { useState } from "react";
import "./Column.scss";
import Card from "../Card/Card";
import { useDrop } from "react-dnd";

const Column = ({ deck, id }) => {
  const [playableDeck, setPlayableDeck] = useState(deck);

  const [{ isOVer }, drop] = useDrop(() => ({
    accept: "card",
    drop: (card) => addCardsToDeck(card),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addCardsToDeck = (card) => {
    setPlayableDeck((prevState) => [...prevState, card]);
  };
  return (
    <div className="column-container" ref={drop} id={id}>
      {playableDeck.map((card, index) => (
        <Card card={card} key={index} setDeck={setPlayableDeck} />
      ))}
    </div>
  );
};

export default Column;
