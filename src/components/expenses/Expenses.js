import React, { useState } from "react";
import "../css/Expenses.css";
import Card from "./Card";
import ExpensesFilter from "../expenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterdYear, setFilteredYear] = useState("2020");
  const expenses = props.data.filter(
    (el) => el.date.getFullYear().toString() === filterdYear
  );
  const expenseFilterHandler = (filterYearChange) => {
    setFilteredYear(filterYearChange);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter getFilterYear={expenseFilterHandler} year={filterdYear} />
      <ExpensesChart exp={expenses} />
      <ExpensesList filterData={expenses} />
    </Card>
  );
};
//Added a comment
export default Expenses;
