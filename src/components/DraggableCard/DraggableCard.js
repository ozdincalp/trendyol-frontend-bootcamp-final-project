import { useDrag } from "react-dnd";
import { removeDraggedCardsFromDeck } from "../../logic/index";
import "./DraggableCard.scss";

const Card = ({ card, deckID, setDeck, setClickMove }) => {
  const [, drag] = useDrag(
    () => ({
      type: "card",
      item: card,
      canDrag: card.isDraggable,
      end: (item, monitor) => {
        if (monitor.didDrop()) {
          removeDraggedCardsFromDeck(deckID, card, setDeck);
        }
      },
    }),[card.isDraggable]);

    const handleClick = (e) => {
      if(card.isDraggable) {
        setClickMove((prevState) => {
          const newState = prevState.slice();
            newState.push({card, deckID, setDeck});
            return newState
        })
      }
    }
  return (
    <div className="card-container">
      <div ref={drag} >
        <div className="card-open-container">
          <div id={card.id} className="card-open" onClick={handleClick}>
            <h3>{card.value}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
