import MovePreview from "../../../assets/tutorial/undo-min.gif";

const Undo = () => {
  return (
    <div className="undo">
      <div className="preview-container">
        <img src={MovePreview} alt="" />
      </div>
      <h2>You can undo your moves.</h2>
    </div>
  );
};

export default Undo;
