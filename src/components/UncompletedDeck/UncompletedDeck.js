import UncompletedDeckImage from "../../assets/uncompleted-deck.png"

const UncompletedDeck = () => {
  return (
    <div className="card-container">
      <div className="card-close">
        <img
          width="135px"
          height="135px"
          src={UncompletedDeckImage}
          alt=""
          draggable="false"
        />
      </div>
    </div>
  );
};

export default UncompletedDeck;
