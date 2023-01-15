import React, { useState } from "react";
import ExpenseFrom from "./ExpenseForm";
import "../css/NewExpense.css";

const NewExpense = (props) => {
  const [expenseForm, setExpenseForm] = useState(false);
  const enteredDataHandler = (enteredData) => {
    const enteredExpenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    props.collectData(enteredExpenseData);
    setExpenseForm(false);
  };
  const renderExpenseForm = () => {
    setExpenseForm(true);
  };

  const stopRenderingForm = () => {
    setExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!expenseForm && (
        <button onClick={renderExpenseForm}>Add New Expense</button>
      )}
      {expenseForm && (
        <ExpenseFrom
          newExpenseData={enteredDataHandler}
          renderForm={stopRenderingForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
