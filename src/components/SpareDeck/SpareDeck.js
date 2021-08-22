import { handleDealCards } from "../../logic/handlers/index";
import CardImage from "../../assets/card-back.png";
import "./SpareDeck.scss"

const SpareDeck = ({ id, deck, setDecks, setSpareDecks }) => {
  return (
    <div className="spare-deck">
      <img
        width="84"
        height="125"
        src={CardImage}
        alt=""
        draggable="false"
        onClick={() => handleDealCards(deck, id, setDecks, setSpareDecks)}
      />
    </div>
  );
};

export default SpareDeck;
