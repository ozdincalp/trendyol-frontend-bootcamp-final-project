import { useEffect } from "react";
import { useDrop } from "react-dnd";
import { handleCompletedDeck, handleDrop } from "../../logic/handlers/index";
import { checkMove } from "../../utils/index"
import DraggableCard from "../DraggableCard/DraggableCard";
import ImmovableCard from "../ImmovableCard/ImmovableCard";
import CardHolder from "../CardHolder/CardHolder";
import "./Column.scss";

const Column = ({ columnID, deck, setDeck, setCompletedDeckCount, setClickMove, setMoves }) => {
  useEffect(() => {
    handleCompletedDeck(deck, setDeck, columnID, setCompletedDeckCount)
  }, [deck, columnID, setCompletedDeckCount, setDeck]);

  const [, drop] = useDrop(() => ({
    accept: "card",
    drop: (card) => {
      handleDrop(setDeck, columnID, card, setMoves);
    },
    canDrop: (item) => {
      return checkMove(item, deck, columnID);
    },
  }), [deck]);

  return (
    <div className="column-container" ref={drop}>
      {deck.length !== 0 ? (
        deck.map((card, index) => {
          if (card.isOpen) {
            return (
              <DraggableCard
                card={card}
                setDeck={setDeck}
                deckID={columnID}
                setClickMove={setClickMove}
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
