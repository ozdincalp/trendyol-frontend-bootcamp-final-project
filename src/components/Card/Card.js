import React from "react";
import cardImage from "../../assets/card-back.png";
import "./card.scss";
import { useDrag } from "react-dnd";

const Card = ({ card, setDeck }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: card,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      console.log(monitor.didDrop());
      console.log(item);
      setDeck((prevState) => {
        const newState = prevState.filter((card) => card.id !== item.id);
        return newState;
      });
    },
  }));

  return (
    <div
      className="card-container"
      ref={drag}
      id={card.id}
      style={{ border: isDragging ? "2px solid yellow" : "0px" }}
    >
      {!card.isLastCard ? (
        <div className="card-close">
          <img width="135px" height="135px" src={cardImage} alt="" />
        </div>
      ) : (
        <div className="card-open">
          <h3>{card.value}</h3>
        </div>
      )}
    </div>
  );
};

export default Card;
