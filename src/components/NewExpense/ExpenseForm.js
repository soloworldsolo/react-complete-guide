import React,{ useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [title,setTitle] = useState('');
    const [amount,setAmmount] = useState('');
    const[date ,setDate] = useState('');

    const titleChangeHandler = (even) => {
        setTitle(even.target.value);
    };
    const ammountChangeHandler = (even) => {
        setAmmount(even.target.value);
    }
    const dateChangeHandler = (even) => {
        setDate(even.target.value)
    }

    const submitHandler = (even) => {
        even.preventDefault();
    }
  return (
    <form className='new-expense' onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={ammountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;