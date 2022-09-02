import './cardFront.css'

const CardFront = ({name, cardNumber, expireDate}: {name: string, cardNumber: string, expireDate: string}) => {
    

    return (
        <div className="card">
            <div className="logo-container">
                <div className="card-logo"></div>
                <div className="card-flag"></div>
            </div>
           

            <div className="number-container">
                <span className="number">{cardNumber}</span>
            </div>

            <div className="info-container">
                <span className="name">{name}</span>
                <span className="date">{expireDate}</span>
            </div>
        </div>
    )
}

export default CardFront