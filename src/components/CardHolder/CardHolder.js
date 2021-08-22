import './CardHolder.scss'

const CardHolder = ({handleClick}) => {
    return (
        <div className="cardholder-container">
            <div className="cardholder" onClick={handleClick}></div>
        </div>
    )
}

export default CardHolder
