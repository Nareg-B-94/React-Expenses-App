import React, { useState } from 'react';
import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseHandler(expenseData);
    setIsClicked(false);
  };

  const [isClicked, setIsClicked] = useState(false);

  const startEditingHandler = () => {
    setIsClicked(true);
  };

  const stopEditingHandler = () => {
    setIsClicked(false);
  };

  return (
    <div className='new-expense'>
      {!isClicked && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {isClicked && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
