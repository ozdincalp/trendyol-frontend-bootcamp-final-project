import { handleDealCards } from "../../logic/handlers/index";
import CardImage from "../../assets/card-back.png";

const SpareDeck = ({ id, deck, setDecks, setSpareDecks }) => {
  return (
    <img
      width="135px"
      height="135px"
      src={CardImage}
      alt=""
      draggable="false"
      onClick={() => handleDealCards(deck, id, setDecks, setSpareDecks)}
    />
  );
};

export default SpareDeck;
