import SpareDeck from "../SpareDeck/SpareDeck";
import "./SpareDecks.scss";

const SpareDecks = ({ decks }) => {
  return (
    <div id="spare_decks" className="spare-decks-container">
      {decks.map((deck, index) => {
        return <SpareDeck id={index} deck={deck} key={index} />;
      })}
    </div>
  );
};

export default SpareDecks;
