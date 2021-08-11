import { useDrag } from "react-dnd";
import "./DraggableCard.scss";

const Card = ({ card, setDeck, deckID}) => {

  const [, drag] = useDrag(() => ({
    type: "card",
    item: { card  },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    canDrag: card.isLastCard,
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        setDeck((prevState) => {
          const arr = prevState.find((deck) => deck.includes(card));
          const index = arr.findIndex((searchedCard) => searchedCard.id === card.id)
          const items = arr.slice(index, arr.length);
          const draggedIDs = items.map((item) => item.id);

         
          
          const newState = prevState.slice();
          newState[deckID] = newState[deckID].filter((card) => !draggedIDs.includes(card.id));
          if(newState[deckID][newState[deckID].length - 1]) {
            newState[deckID][newState[deckID].length - 1].isLastCard = true;
          }
          return newState;
        });
      }
    },
  }));

  return (
    <div className="card-container">
        <div
          ref={drag}
          id={card.id}
        >
          <div className="card-open">
            <h3>{card.value}</h3>
          </div>
        </div>
    </div>
  );
};

export default Card;
