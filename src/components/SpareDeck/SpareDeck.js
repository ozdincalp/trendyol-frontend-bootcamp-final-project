import { useContext } from "react";
import { handleDealCards } from "../../logic/handlers/index";
import CardImage from "../../assets/card-back.png";
import "./SpareDeck.scss";
import { StoreContext } from "../../context/store";

const SpareDeck = ({ id, deck }) => {
  const {
    "playableDecks": [, setPlayableDecks],
    "spareDecks": [, setSpareDecks]
  } = useContext(StoreContext);
  
  return (
    <div className="spare-deck">
      <img
        width="84"
        height="125"
        src={CardImage}
        alt=""
        draggable="false"
        onClick={() => handleDealCards(deck, id, setPlayableDecks, setSpareDecks)}
      />
    </div>
  );
};

export default SpareDeck;
