import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useContext } from "react";
import { StoreContext } from "../../context/store";
import Column from "../Column/Column";
import "./Columns.scss";

const Columns = () => {
  const {
    "playableDecks": [playableDecks]
  } = useContext(StoreContext);
  
  return (
    <div className="columns-container">
      <DndProvider backend={HTML5Backend}>
        {playableDecks.map((deck, index) => (
          <Column
            columnID={index}
            deck={deck}
            key={index}
          />
        ))}
      </DndProvider>
    </div>
  );
};

export default Columns;
