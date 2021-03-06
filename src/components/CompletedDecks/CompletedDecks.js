import { useContext } from "react";
import UncompletedDeck from "../UncompletedDeck/UncompletedDeck";
import ImmovableCard from "../ImmovableCard/ImmovableCard";
import { StoreContext } from "../../context/store";
import "./CompletedDecks.scss";

const CompletedDecks = () => {
  const {
    completedDeckCount: [completedDeckCount],
  } = useContext(StoreContext);

  return (
    <div className="completed-decks-container">
      {[...Array(completedDeckCount)].map((item, index) => {
        return <ImmovableCard key={index} />;
      })}
      {[...Array(8 - completedDeckCount)].map((item, index) => {
        return <UncompletedDeck key={index} />;
      })}
    </div>
  );
};

export default CompletedDecks;
