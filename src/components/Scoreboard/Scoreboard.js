import { useContext } from "react";
import { StoreContext } from "../../context/store";
import "./Scoreboard.scss";

const Scoreboard = () => {
    const {
        "timer" : [timer,],
        "score" : [score,],
      } = useContext(StoreContext);
    return (
        <div className="scoreboard-container">
            <div className="timer-container">
                <h2>{timer}</h2>
            </div>
            <div className="title-container">
                <h1>Reversed Spider Solitaire</h1>
            </div>
            <div className="score-container">
                <h2>{score}</h2>
            </div>
        </div>
    )
}

export default Scoreboard
