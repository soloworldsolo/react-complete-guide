import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../Card';
import { useState } from 'react';
const ExpenseItem =(props)  => {
   const [title,setTitle] = useState(props.title)
       const clickElemnet = () => {
           setTitle('Bitch please')
           console.log("wassup mother fuckers")
       }
        return (
        <Card className ="expense-item">
        <ExpenseDate date ={props.date}> </ExpenseDate>
        <div className = "expense-item__description"><h2>{title}</h2></div>
        <div className ="expense-item__price">{props.amount}</div>
        <button onClick={clickElemnet}>change button</button>

    </Card>
    )
}

export default ExpenseItem;