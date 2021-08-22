import UncompletedDeckImage from "../../assets/uncompleted-deck.png"

const UncompletedDeck = () => {
  return (
    <div className="card-container">
      <div className="card-close">
        <img
          width="84px"
          height="125px"
          src={UncompletedDeckImage}
          alt=""
          draggable="false"
        />
      </div>
    </div>
  );
};

export default UncompletedDeck;
