import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "../Column/Column";
import "./Columns.scss";

const Columns = ({ decks, setDecks, setCompletedDeckCount, setClickMove, setMoves }) => {
  return (
    <div className="columns-container">
      <DndProvider backend={HTML5Backend}>
        {decks.map((deck, index) => (
          <Column
            columnID={index}
            deck={deck}
            setDeck={setDecks}
            setCompletedDeckCount={setCompletedDeckCount}
            setClickMove={setClickMove}
            setMoves={setMoves}
            key={index}
          />
        ))}
      </DndProvider>
    </div>
  );
};

export default Columns;
