import cardImage from "../../assets/card-back.png";

const ImmovableCard = () => {
  return (
    <div className="card-container">
      <div className="card-close">
        <img
          width="84px"
          height="125px"
          src={cardImage}
          alt=""
          draggable="false"
        />
      </div>
    </div>
  );
};

export default ImmovableCard;
