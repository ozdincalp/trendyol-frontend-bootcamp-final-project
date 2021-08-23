import MovePreview from "../../../assets/tutorial/dealCards-min.gif";
import "./DealCard.scss";

const DealCard = () => {
  return (
    <div className="deal-card">
      <div className="preview-container">
        <img src={MovePreview} alt="Deal Card Move" />
      </div>
      <h2>You can deal one card onto each column if you feel stuck.</h2>
    </div>
  );
};

export default DealCard;
