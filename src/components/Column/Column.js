import { useEffect, useContext } from "react";
import { useDrop } from "react-dnd";
import { handleCompletedDeck, handleDrop, handleCardClick } from "../../logic/handlers/index";
import { checkMove } from "../../utils/index"
import DraggableCard from "../DraggableCard/DraggableCard";
import ImmovableCard from "../ImmovableCard/ImmovableCard";
import CardHolder from "../CardHolder/CardHolder";
import "./Column.scss";
import { StoreContext } from "../../context/store";

const Column = ({ columnID, deck }) => {
  const {
    "playableDecks": [, setPlayableDecks],
    "clickMove" : [, setClickMove],
    "moves": [, setMoves],
    "completedDeckCount": [, setCompletedDeckCount],
  } = useContext(StoreContext);

  useEffect(() => {
    handleCompletedDeck(deck, setPlayableDecks, columnID, setCompletedDeckCount)
  }, [deck.length, deck, setPlayableDecks, setCompletedDeckCount, columnID]);

  const [, drop] = useDrop(() => ({
    accept: "card",
    drop: (card) => {
      handleDrop(setPlayableDecks, columnID, card, setMoves);
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
                deckID={columnID}
                key={index}
              />
            );
          } else {
            return <ImmovableCard key={index} />;
          }
        })
      ) : (
        <CardHolder handleClick={() => handleCardClick({cardHolder:true}, columnID, setClickMove)}/>
      )}
    </div>
  );
};

export default Column;
