import React,{ useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [newtitle,setTitle] = useState('');
    const [newamount,setAmmount] = useState('');
    const[newdate ,setDate] = useState('');

    const titleChangeHandler = (even) => {
        setTitle(even.target.value);
    };
    const ammountChangeHandler = (even) => {
        setAmmount(even.target.value);
    }
    const dateChangeHandler = (even) => {
        console.log("in date change listener");
        console.log(even.target.value);
        setDate(even.target.value)
    }

    const submitHandler = (even) => {
        even.preventDefault();
        const inputValue = {
            title: newtitle,
            amount:newamount,
            date: new Date(newdate)
        }
        props.onSave(inputValue);
    }
  return (
    <form className='new-expense' onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={newtitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={newamount} min='0.01' step='0.01' onChange={ammountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={newdate} onChange = {dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;