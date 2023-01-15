import Expenses from "./components/expenses/Expenses";
import NewExpense from "../src/components/newExpenses/NewExpense";
import React, { useState } from "react";

const expenses = [
  {
    id: "e1",
    title: "Computer",
    amount: 400.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expensesCollection, setExpensesCollection] = useState(expenses);

  const collectDataHandler = (data) => {
    setExpensesCollection((exp) => [data, ...expensesCollection]);
  };

  return (
    <div>
      <NewExpense collectData={collectDataHandler} />
      <Expenses data={expensesCollection} />
    </div>
  );
}

export default App;
