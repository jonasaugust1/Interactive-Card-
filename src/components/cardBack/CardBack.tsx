import './cardBack.css'


const CardBack = ({cvc}: {cvc: string}) => {

    return (
        <div className='card-back'>
            <span className='cvc'>{cvc}</span>   
        </div>
    )
}

export default CardBack