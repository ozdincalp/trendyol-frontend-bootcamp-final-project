import cardImage from "../../assets/card-back.png";

const UncompletedDeck = () => {
  return (
    <div className="card-container">
        <img
          width="84px"
          height="125px"
          src={cardImage}
          alt=""
          draggable="false"
        />
        <div className="uncompleted-card-overlay"></div>
    </div>
  );
};

export default UncompletedDeck;
