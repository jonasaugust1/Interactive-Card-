import { ChildPropsState } from '../../types/types'
import './cardBack.css'


const CardBack = (props: ChildPropsState) => {

    return (
        <div className='card-back'>
            <span className='cvc'>{props.cvc}</span>   
        </div>
    )
}

export default CardBack