import { useState } from "react";
import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import Column from "../Column/Column";
import "./Columns.scss";

const Columns = ({ decks }) => {
  const [playableDecks, setPlayableDecks] = useState(decks);

  return (
    <div className="columns-container">
      <DndProvider backend={HTML5Backend}>
        {playableDecks.map((deck, index) => (
          <Column deck={deck} key={index} id={index} setDeck={setPlayableDecks}/>
        ))}
      </DndProvider>
    </div>
  );
};

export default Columns;
