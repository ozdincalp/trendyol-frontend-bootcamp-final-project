import { useEffect } from "react";
import { useDrop } from "react-dnd";
import { addCardsToDeck, removeCompletedDeck, mapMoves } from "../../logic/index";
import { checkMove } from "../../utils/index"
import DraggableCard from "../DraggableCard/DraggableCard";
import ImmovableCard from "../ImmovableCard/ImmovableCard";
import CardHolder from "../CardHolder/CardHolder";
import "./Column.scss";

const Column = ({ columnID, deck, setDeck, setCompletedDeckCount, setClickMove, setMoves }) => {
  useEffect(() => {
    const sortedCardIDs = deck
      .filter((card) => card.isDraggable)
      .map((card) => card.id);

    if (sortedCardIDs.length === 13) {
      removeCompletedDeck(columnID, sortedCardIDs, setDeck);
      setCompletedDeckCount((prevState) => prevState + 1);
    }
  }, [deck, columnID, setCompletedDeckCount, setDeck]);

  const [, drop] = useDrop(() => ({
      accept: "card",
      drop: async(card) => {
        const [draggedCards, index, previousCard] = await addCardsToDeck(columnID, card, setDeck);
        mapMoves(draggedCards, index, columnID, previousCard, setMoves);
      },
      canDrop: (item) => {
        return checkMove(item, deck, columnID);
      },
    }),[deck]);

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
