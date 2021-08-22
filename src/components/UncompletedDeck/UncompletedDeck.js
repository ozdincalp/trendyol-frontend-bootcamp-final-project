import UncompletedDeckImage from "../../assets/uncompleted-deck.png";

const UncompletedDeck = () => {
  return (
    <div className="card-container">
        <img
          width="84px"
          height="125px"
          src={UncompletedDeckImage}
          alt=""
          draggable="false"
        />
        <div className="uncompleted-card-overlay"></div>
    </div>
  );
};

export default UncompletedDeck;
