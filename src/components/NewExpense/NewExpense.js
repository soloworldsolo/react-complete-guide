
import ExpenseForm from './ExpenseForm';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import './NewExpense.css';
const NewExpense = (props) => {
    const  onSaveHandler = (data) => {
    const expenseDate = {...data ,id:Math.random().toString()}
    props.addExpense(expenseDate);
    };
  return (
      <div>
    <div className='new-expense'>

      <ExpenseForm onSave={onSaveHandler}/>
    </div>
                    </div>

  );
};

export default NewExpense;