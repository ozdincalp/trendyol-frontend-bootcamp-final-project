import CompletedDeck from "../CompletedDeck/CompletedDeck"
import ImmovableCard from "../ImmovableCard/ImmovableCard"
import './CompletedDecks.scss'

const CompletedDecks = ({ completedDeckCount }) => {
    return (
        <div className="completed-decks-container">
            {[...Array(completedDeckCount)].map((item, index) => {
                return <ImmovableCard key={index}/>
            })}
             {[...Array(8 - completedDeckCount)].map((item, index) => {
                return <CompletedDeck key={index}/>
            })}
            
        </div>
    )
}

export default CompletedDecks