import MovePreview from "../../../assets/tutorial/confetti.jpg";

const Win = () => {
  return (
    <div className="win">
      <div className="preview-container">
        <img src={MovePreview} alt="" />
      </div>
      <h2>You can see confetti if you win the game!</h2>
    </div>
  );
};

export default Win;
