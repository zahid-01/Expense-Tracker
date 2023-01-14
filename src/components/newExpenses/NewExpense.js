import React from "react";
import ExpenseFrom from "./ExpenseForm";
import "../css/NewExpense.css";

const NewExpense = (props) => {
  const enteredDataHandler = (enteredData) => {
    const enteredExpenseData = {
      ...enteredData,
      key: Math.random().toString(),
    };

    props.collectData(enteredExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseFrom newExpenseData={enteredDataHandler} />
    </div>
  );
};

export default NewExpense;
