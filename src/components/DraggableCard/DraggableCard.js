import { useDrag } from "react-dnd";
import "./DraggableCard.scss";

const Card = ({ card, setDeck, deckID}) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "card",
    item: { card, deckID },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    canDrag: card.isLastCard,
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        setDeck((prevState) => {
          const newState = prevState.slice();
          newState[deckID] = newState[deckID].filter((card) => card.id !== item.card.id);
          newState[deckID][newState[deckID].length - 1].isLastCard = true;
          return newState;
        });
      }
    },
  }));

  return (
    <div className="card-container">
      {isDragging ? (
        <div ref={dragPreview} />
      ) : (
        <div
          ref={drag}
          id={card.id}
        >
          <div className="card-open">
            <h3>{card.value}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
