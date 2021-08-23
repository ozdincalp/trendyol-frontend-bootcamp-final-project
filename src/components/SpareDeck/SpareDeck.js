import { useContext } from "react";
import { handleDealCards } from "../../logic/handlers/index";
import { StoreContext } from "../../context/store";
import cardImage from "../../assets/card-back.png";
import "./SpareDeck.scss";

const SpareDeck = ({ id, deck }) => {
  const {
    "playableDecks": [, setPlayableDecks],
    "spareDecks": [, setSpareDecks],
    "moves": [, setMoves],
  } = useContext(StoreContext);

  return (
    <div className="spare-deck">
      <img
        width="84"
        height="125"
        src={cardImage}
        alt=""
        draggable="false"
        onClick={() =>
          handleDealCards(deck, id, setPlayableDecks, setSpareDecks, setMoves)
        }
      />
    </div>
  );
};

export default SpareDeck;
