import React from "react";
import { useEffect, useState } from "react";
import { useDragLayer } from "react-dnd";
import { getDraggedCards } from "../../utils";
import { CARD_VALUES } from "../../gameConfig";
import SpadeIcon from "../../assets/spade-icon.svg";

const layerStyles = {
  position: "relative",
  pointerEvents: "none",
  zIndex: 100,
};

function getItemStyles(initialOffset, currentOffset, columnID) {
  if (!initialOffset || !currentOffset) {
    return {
      display: "none",
    };
  }
  let { x, y } = currentOffset;
  const transform = `translate(${x - columnID * 2 * 70}px, ${
    y - (initialOffset.y + 120)
  }px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

const DragLayer = ({ setDeck, columnID }) => {
  const [draggedCards, setDraggedCards] = useState([]);
  const { item, initialOffset, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
  }));
  useEffect(() => {
    async function test() {
      let state;
      await setDeck((prevState) => {
        state = prevState.slice();
        return prevState;
      });
      setDraggedCards((prevState) => {
        return getDraggedCards(state.slice(), item);
      });
    }
    test();
  }, [item, setDeck]);
  return (
    <div style={layerStyles}>
      {draggedCards.length > 0 && columnID !== 10
        ? draggedCards.map((card, index) => (
            <div key={index}>
              <div className="card-container">
                <div
                  style={getItemStyles(initialOffset, currentOffset, columnID)}
                >
                  <div className="card-open-container">
                    <div className="card-open">
                      <span className="card-value top-corner">
                        {CARD_VALUES[card.value]}
                      </span>
                      <div className="card-icon-container">
                        <img src={SpadeIcon} alt="" />
                      </div>
                      <span className="card-value bottom-corner">
                        {CARD_VALUES[card.value]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default DragLayer;
