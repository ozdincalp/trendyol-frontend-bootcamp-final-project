import { useDrop } from "react-dnd";
import DraggableCard from "../DraggableCard/DraggableCard";
import ImmovableCard from "../ImmovableCard/ImmovableCard";
import CardHolder from "../CardHolder/CardHolder";
import "./Column.scss";

const Column = ({ deck, id, setDeck }) => {
  const [, drop] = useDrop(
    () => ({
      accept: "card",
      drop: ({ card }) => addCardsToDeck(card),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
      canDrop: (item, monitor) => {
        if (item.deckID === id) return false;
        else {
          if (deck.length === 0) {
            return item.card.value === 1;
          } else {
            return item.card.value - deck[deck.length - 1].value === 1;
          }
        }
      },
    }),
    [deck]
  );

  const addCardsToDeck = (card) => {
    setDeck((prevState) => {
      const arr = prevState.find((deck) => deck.includes(card));
      const index = arr.findIndex(
        (searchedCard) => searchedCard.id === card.id
      );
      const items = arr.slice(index, arr.length);

      const newState = prevState.slice();
      newState[id] = [...newState[id], ...items];
      return newState;
    });
  };
  return (
    <div className="column-container" ref={drop} id={id}>
      {deck.length !== 0 ? (
        deck.map((card, index) => {
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
        })
      ) : (
        <CardHolder />
      )}
    </div>
  );
};

export default Column;
