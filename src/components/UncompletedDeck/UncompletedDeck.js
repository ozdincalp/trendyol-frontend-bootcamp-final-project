import cardImage from "../../assets/uncompleted-deck.png";

const UncompletedDeck = () => {
  return (
    <div className="card-container">
      <img
        width="84px"
        height="125px"
        src={cardImage}
        alt="Card Image"
        draggable="false"
      />
    </div>
  );
};

export default UncompletedDeck;
