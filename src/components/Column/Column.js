import { useEffect } from "react";
import { useDrop } from "react-dnd";
import { handleCompletedDeck, handleDrop, handleCardClick } from "../../logic/handlers/index";
import { checkMove } from "../../utils/index"
import DraggableCard from "../DraggableCard/DraggableCard";
import ImmovableCard from "../ImmovableCard/ImmovableCard";
import CardHolder from "../CardHolder/CardHolder";
import "./Column.scss";

const Column = ({ columnID, deck, setDeck, setCompletedDeckCount, setClickMove, setMoves }) => {
  useEffect(() => {
    handleCompletedDeck(deck, setDeck, columnID, setCompletedDeckCount)
  }, [deck.length, deck, setDeck, setCompletedDeckCount, columnID]);

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
    <div id={columnID===10 ? "secret-column" : null} className={"column-container" + (columnID===10 ? " secret" : "")} ref={drop}>
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
        <CardHolder handleClick={() => handleCardClick({cardHolder:true}, columnID, setClickMove, setDeck)}/>
      )}
    </div>
  );
};

export default Column;
