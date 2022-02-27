import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import Card from '../Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterdItems = props.items.filter(item =>{return item.date.getFullYear().toString() === filteredYear});
  
  let value = <p> no items found</p>;

  if(filterdItems.length > 0) {
      value =  filterdItems.map(
        (expense) => (
        <ExpenseItem key={expense.id} title = {expense.title} 
     amount = {expense.amount} date = {expense.date} 
    />

        ));
  }
  
  return (

    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
         {value}
      </Card>
    </div>
  );
};

export default Expenses;