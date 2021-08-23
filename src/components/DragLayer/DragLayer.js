import { useEffect, useState, useContext } from "react";
import { useDragLayer } from "react-dnd";
import { getDraggedCards } from "../../utils/helpers";
import { CARD_VALUES } from "../../gameConfig";
import { StoreContext } from "../../context/store";
import cardIcon from "../../assets/spade-icon.svg";

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

  const transform = `translate(${x - initialOffset.x}px, ${
    y - (initialOffset.y + 120)
  }px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

const DragLayer = ({ columnID }) => {
  const {
    playableDecks: [, setPlayableDecks],
  } = useContext(StoreContext);

  const [draggedCards, setDraggedCards] = useState([]);
  const { item, initialOffset, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
  }));
  useEffect(() => {
    async function handleDrag() {
      let state;
      await setPlayableDecks((prevState) => {
        state = prevState.slice();
        return prevState;
      });
      setDraggedCards((prevState) => {
        return getDraggedCards(state.slice(), item);
      });
    }
    handleDrag();
  }, [item, setPlayableDecks]);
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
                        <img src={cardIcon} alt="" />
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
