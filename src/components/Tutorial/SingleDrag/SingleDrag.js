import MovePreview from "../../../assets/tutorial/singleDrag-min.gif";

const SingleDrag = () => {
    return (
        <div className="single-drag">
            <img src={MovePreview} alt="" />
            <h2>You can drag a card onto another. A small icon shows up if your move is legit.</h2>
        </div>
    )
}

export default SingleDrag
