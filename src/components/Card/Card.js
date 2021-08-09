import React from 'react'
import cardImage from '../../assets/card-back.png'
import './card.scss'

const Card = () => {
    return (
        <div className="card-container">
            <img width="135px" height="135px" src={cardImage} alt="" />
        </div>
    )
}

export default Card
