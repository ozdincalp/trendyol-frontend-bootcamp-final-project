import MovePreview from "../../../assets/tutorial/dragToEmpty-min.gif";

const DragToEmpty = () => {
  return (
    <div className="drag-to-empty">
      <div className="preview-container">
        <img src={MovePreview} alt="Drag To Empty Move" />
      </div>
      <h2>You can drag any cards onto empty columns.</h2>
    </div>
  );
};

export default DragToEmpty;
