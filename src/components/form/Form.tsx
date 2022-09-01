import {useCreditCardValidator, images} from 'react-creditcard-validator'
import { ChildProps } from '../../types/types'
import './form.css'


const Form = (props: ChildProps) => {

    const nameChangeHandler = (name:string) => {
        props.onName(name)
      }
    
      const cardNumberChangeHandler = (cardNumber:string) => {
        props.onCardNumber(cardNumber)
      }
    
      const expireDateChangeHandler = (expireDate:string) => {
        props.onExpireDate(expireDate)
      }

      const cvcChangeHandler = (cvc:string) => {
        props.onCvc(cvc)
      }

    const {
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
        getCardImageProps,
        meta: { erroredInputs }
      } = useCreditCardValidator();

    return (
            <form>
                <label htmlFor="name">Cardholder name</label>
                <input
                 id="name" 
                 type="text" 
                 placeholder="e.g. Jonas Augusto"
                 onChange={(e: React.FormEvent<HTMLInputElement>) => nameChangeHandler(e.currentTarget.value)} 
                 required />

                <label htmlFor="card-number">Card number</label>
                <svg {...getCardImageProps({ images })} />
                <input 
                    {...getCardNumberProps()} 
                    placeholder="e.g. 1234 5678 9123 0000"
                    onChange={(e: React.FormEvent<HTMLInputElement>) => cardNumberChangeHandler(e.currentTarget.value)} 
                    required />
                <small className='card-auth'>{erroredInputs.cardNumber && erroredInputs.cardNumber}</small>
                
                <div className="container">
                    <fieldset className='expire-date'>
                        <legend>Exp. Date MM/YY</legend>
                        <input 
                            {...getExpiryDateProps()} 
                            placeholder="MM"
                            onChange={(e: React.FormEvent<HTMLInputElement>) => expireDateChangeHandler(e.currentTarget.value)}
                            required 
                            />
                        <small className='card-auth'>{erroredInputs.expiryDate && erroredInputs.expiryDate}</small>
                    </fieldset>

                    <fieldset className='cvc-field'>
                        <legend>CVC</legend>
                        <input  
                            {...getCVCProps()} 
                            placeholder="e.g. 123"
                            onChange={(e: React.FormEvent<HTMLInputElement>) => cvcChangeHandler(e.currentTarget.value)} 
                            required
                            />
                    </fieldset>
                </div>

                <button>Confirm</button>
            </form>
        )
}

export default Form
