import MovePreview from "../../../assets/tutorial/hint-min.gif";
import "./Hint.scss";

const Hint = () => {
  return (
    <div className="hint">
      <div className="preview-container">
        <img src={MovePreview} alt="Hint Move" />
      </div>
      <h2>You can see hints with a beautiful animation.</h2>
    </div>
  );
};

export default Hint;
