import React from 'react'
import SpareDeck from '../SpareDeck/SpareDeck'
import './SpareDecks.scss'

const SpareDecks = ({ decks, setDecks, setSpareDecks }) => {
    return (
        <div className="spare-decks-container">
            {decks.map((deck, index) => {
                return <SpareDeck deck={deck} setDecks={setDecks} setSpareDecks={setSpareDecks} key={index} id={index}/>
            })}
        </div>
    )
}

export default SpareDecks
