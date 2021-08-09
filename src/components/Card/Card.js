import React from "react";
import cardImage from "../../assets/card-back.png";
import "./card.scss";

const Card = ({ card }) => {
  return (
    <div className="card-container">
      {!card.isLastCard ? (
        <div className="card-close"><img width="135px" height="135px" src={cardImage} alt="" /></div>
      ) : (
        <div className="card-open">
            <h3>{card.value}</h3>
        </div>
      )}
    </div>
  );
};

export default Card;
