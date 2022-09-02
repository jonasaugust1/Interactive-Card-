import { useState } from 'react';
import Form from './components/form/Form'
import CardFront from './components/cardFront/CardFront'
import CardBack from './components/cardBack/CardBack';
import './App.css';

function App() {
  

  const [name, setName] = useState('Jonas Augusto')
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000')
  const [expireDate, setExpireDate] = useState('00/00')
  const [cvc, setCvc] = useState('000')

  const nameHandler = (name:string) => {
    setName(name)
  }

  const cardNumberHandler = (cardNumber:string) => {
    setCardNumber(cardNumber)
  }

  const expireDateHandler = (expireDate:string) => {
    setExpireDate(expireDate)
  }

  const cvcHandler = (cvc:string) => {
    setCvc(cvc)
  }



  return (
    <div className="App">
      <div className="linear-gradient">
        <CardFront
          name={name}
          cardNumber={cardNumber}
          expireDate={expireDate}
        />
        <CardBack
          cvc={cvc}
        />
      </div>
      <Form
        onName={nameHandler}
        onCardNumber={cardNumberHandler}
        onExpireDate={expireDateHandler}
        onCvc={cvcHandler}
      />
    </div>
  );
}

export default App;
