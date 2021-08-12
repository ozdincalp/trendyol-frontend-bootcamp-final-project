import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import Column from "../Column/Column";
import "./Columns.scss";

const Columns = ({ decks, setDecks, setCompletedDeckCount }) => {

  return (
    <div className="columns-container">
      <DndProvider backend={HTML5Backend}>
        {decks.map((deck, index) => (
          <Column deck={deck} key={index} id={index} setDeck={setDecks} setCompletedDeckCount={setCompletedDeckCount}/>
        ))}
      </DndProvider>
    </div>
  );
};

export default Columns;
