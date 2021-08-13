import { dealCardsFromSpare, removeSpareDeck } from "../../logic/index";
import CardImage from "../../assets/card-back.png";

const SpareDeck = ({ id, deck, setDecks, setSpareDecks }) => {
  const dealCards = (e) => {
    dealCardsFromSpare(deck, setDecks);
    removeSpareDeck(id, setSpareDecks);
  };

  return (
    <img
      width="135px"
      height="135px"
      src={CardImage}
      alt=""
      draggable="false"
      onClick={dealCards}
    />
  );
};

export default SpareDeck;
