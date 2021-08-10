import React from "react";
import cardImage from "../../assets/card-back.png";

const NotDraggableCard = () => {
  return (
    <div className="card-container">
        <div className="card-close">
          <img width="135px" height="135px" src={cardImage} alt="" />
        </div>
    </div>
  );
};

export default NotDraggableCard;
