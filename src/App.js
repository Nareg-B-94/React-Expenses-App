import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DummyExpenses = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 321.21,
    date: new Date(2023, 2, 21),
  },
  {
    id: 'e2',
    title: 'Toilet Insurance',
    amount: 211.03,
    date: new Date(2023, 3, 29),
  },
  {
    id: 'e3',
    title: 'TV Insurance',
    amount: 32.03,
    date: new Date(2020, 8, 27),
  },
  {
    id: 'e4',
    title: 'Laptop Insurance',
    amount: 100.99,
    date: new Date(2023, 5, 1),
  },
  {
    id: 'e5',
    title: 'Handy Insurance',
    amount: 100.99,
    date: new Date(2018, 5, 1),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DummyExpenses);

  const addExpenseHandler = (expense) => {
    console.log('in App.js', expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
