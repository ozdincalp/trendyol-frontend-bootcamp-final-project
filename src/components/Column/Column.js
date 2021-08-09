import React from 'react'
import './Column.scss'
import Card from '../Card/Card'

const Column = () => {
    return (
        <div className="column-container">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Column
