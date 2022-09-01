import { ChildPropsState } from '../../types/types'
import './cardFront.css'

const CardFront = (props: ChildPropsState) => {
    

    return (
        <div className="card">
            <div className="logo-container">
                <div className="card-logo"></div>
                <div className="card-flag"></div>
            </div>
           

            <div className="number-container">
                <span className="number">{props.cardNumber}</span>
            </div>

            <div className="info-container">
                <span className="name">{props.name}</span>
                <span className="date">{props.expireDate}</span>
            </div>
        </div>
    )
}

export default CardFront