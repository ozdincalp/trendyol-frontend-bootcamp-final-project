import { useDrop } from "react-dnd";
import DraggableCard from "../DraggableCard/DraggableCard";
import ImmovableCard from "../ImmovableCard/ImmovableCard";
import "./Column.scss";

const Column = ({ deck, id, setDeck }) => {

  const [, drop] = useDrop(() => ({
    accept: "card",
    drop: ({ card }) => addCardsToDeck(card),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    canDrop: (item, monitor) => {
      if(item.deckID === id) return false;
      else{
        console.log("from canDrop", deck.length)
         if(item.card.value - deck[deck.length - 1].value === 1) return true;
      }
    },
  }),[deck]);

  const addCardsToDeck = (card) => {
    setDeck((prevState) => {
      const newState = prevState.slice();
      newState[id] = [...newState[id], card];
      return newState;
    })
  };
  return (
    <div className="column-container" ref={drop} id={id}>
      {deck.map((card, index) => {
        if (card.isLastCard) {
          return (
            <DraggableCard
              card={card}
              setDeck={setDeck}
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
