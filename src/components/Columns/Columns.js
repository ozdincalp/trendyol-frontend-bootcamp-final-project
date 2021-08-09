import React from "react";
import Column from "../Column/Column";
import "./Columns.scss";

const Columns = ({ decks }) => {
  return (
    <div className="columns-container">
      {decks.map((deck, index) => (
        <Column deck={deck} key={index} id={index} />
      ))}
    </div>
  );
};

export default Columns;
