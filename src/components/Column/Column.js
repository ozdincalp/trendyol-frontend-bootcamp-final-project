import React from 'react'
import './Column.scss'
import Card from '../Card/Card'

const Column = ({deck}) => {
    return (
        <div className="column-container">
            {deck.map((card, index) => <Card card={card} key={index}/>)}
        </div>
    )
}

export default Column
