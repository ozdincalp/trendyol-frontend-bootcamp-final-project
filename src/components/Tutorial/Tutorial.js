import { useState } from "react";
import "./Tutorial.scss";
import Greeting from "./Greeting/Greeting";
import SingleDrag from "./SingleDrag/SingleDrag";
import MultiDrag from "./MultiDrag/MultiDrag";
import DealCard from "./DealCard/DealCard";
import Hint from "./Hint/Hint";
import Undo from "./Undo/Undo";
import DragToEmpty from "./DragToEmpty/DragToEmpty";
import Win from "./Win/Win";
import Cheat from "./Cheat/Cheat";

const Tutorial = () => {
    const [page, setPage] = useState(0);

    const backHandler = () => {
        if(page !== 0) {
            setPage((prevState) => prevState - 1);
        }
    }
    const nextHandler = () => {
        if(page !== 8) {
            setPage((prevState) => prevState + 1);
        }
    }
    return (
        <div className="tutorial-container">
            {page === 0 ? <Greeting /> : null}
            {page === 1 ? <SingleDrag /> : null}
            {page === 2 ? <MultiDrag /> : null}
            {page === 3 ? <DealCard /> : null}
            {page === 4 ? <Hint /> : null}
            {page === 5 ? <Undo /> : null}
            {page === 6 ? <DragToEmpty /> : null}
            {page === 7 ? <Cheat /> : null}
            {page === 8 ? <Win /> : null}
            <div className="page-controllers">
                <div className="tutorial-back" onClick={backHandler}>
                    Back
                </div>
                <div className="tutorial-forward" onClick={nextHandler}>
                    Next
                </div>
            </div>
        </div>
    )
}

export default Tutorial
