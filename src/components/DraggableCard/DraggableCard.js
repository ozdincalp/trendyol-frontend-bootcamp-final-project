import { useEffect, useContext } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { handleCardClick, handleDraggedCards } from "../../logic/handlers";
import "./DraggableCard.scss";
import { CARD_VALUES } from "../../gameConfig";
import DragLayer from "../DragLayer/DragLayer";
import SpadeIcon from "../../assets/spade-icon.svg";
import { StoreContext } from "../../context/store";

const Card = ({ card, deckID }) => {
  const {
    "playableDecks": [, setPlayableDecks],
    "clickMove" : [, setClickMove],
  } = useContext(StoreContext);

  const [{isDragging}, drag, preview] = useDrag(
    () => ({
      type: "card",
      item: card,
      canDrag: card.isDraggable,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
      }),
      end: (item, monitor) => {
        if (monitor.didDrop()) {
          handleDraggedCards(card, deckID, setPlayableDecks);
        }
      },
    }),
    [card.isDraggable]
  );
  useEffect(() => {
      preview(getEmptyImage(), { captureDraggingState: true });
}, [preview, deckID]);

  return (
    <div className="card-container">
      <div className="draggable" ref={drag}>
        <div className="card-open-container">
          <div
            id={card.id}
            className="card-open"
            onClick={() => handleCardClick(card, deckID, setClickMove, setPlayableDecks)}
          >
           <span className="card-value top-corner">{CARD_VALUES[card.value]}</span>
           <div className="card-icon-container">
          
            <img  src={SpadeIcon}  alt="" />
           </div>
           <span className="card-value bottom-corner">{CARD_VALUES[card.value]}</span>
            {isDragging ? <DragLayer columnID={deckID}/> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
