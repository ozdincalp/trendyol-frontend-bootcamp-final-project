import gameImage from "../../../assets/tutorial/greeting.png";
import "./Greeting.scss";
const Greeting = () => {
    return (
        <div className="greeting">
            <img src={gameImage} alt="" />
            <h2>Welcome to the reversed spider solitaire game! Finish this tutorial to discover rules and magics of the game... </h2>
        </div>
    )
}

export default Greeting
