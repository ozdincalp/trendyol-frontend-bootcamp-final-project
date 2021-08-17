import { useDrag } from "react-dnd";
import { handleCardClick, handleDraggedCards } from "../../logic/handlers";
import "./DraggableCard.scss";

const Card = ({ card, deckID, setDeck, setClickMove }) => {
  const [, drag] = useDrag(() => ({
      type: "card",
      item: card,
      canDrag: card.isDraggable,
      end: (item, monitor) => {
        if (monitor.didDrop()) {
          handleDraggedCards(card, deckID, setDeck);
        }
      },
    }),
    [card.isDraggable]
  );

  return (
    <div className="card-container">
      <div ref={drag}>
        <div className="card-open-container">
          <div
            id={card.id}
            className="card-open"
            onClick={() => handleCardClick(card, deckID, setClickMove, setDeck)}
          >
            <h3>{card.value}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
