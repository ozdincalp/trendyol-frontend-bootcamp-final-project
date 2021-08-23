import MovePreview from "../../../assets/tutorial/cheat-min.gif";
import "./Cheat.scss";

const Cheat = () => {
  return (
    <div className="cheat">
      <div className="preview-container">
        <img src={MovePreview} alt="" />
      </div>
      <h2>
        An extra column shows up if you click cheat. You can drag and drop there
        for 10 seconds. But hurry up! Any cards remaining on cheat column will
        be moved onto random column.
      </h2>
    </div>
  );
};

export default Cheat;
