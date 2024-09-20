import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import { useRef, useState } from 'react';


const MealItemForm = props =>{
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();


  const SubmitHandler = event =>{
   event.preventDefault();
   const enteredAmount = amountInputRef.current.value;
   const enteredAmountNumber = + enteredAmount;

   if(enteredAmount.trim().length == 0 || enteredAmount < 1 || enteredAmount > 5){
    setAmountIsValid(false);
    return;
   }
   props.onAddToCart(enteredAmountNumber);
  }
  return (
  <form className={classes.form} onSubmit={SubmitHandler}>
    <Input  ref= {amountInputRef} lable="Amount" input={{
       
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
    }}/>
    <button>+add</button>
    {!amountIsValid && <p>Please enter a valid Amount (1-5)</p>}
  </form>
  )
}

export default MealItemForm;