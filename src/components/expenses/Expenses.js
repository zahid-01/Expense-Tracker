import React, { useState } from "react";
import ExpenseItem from "./ExpenseItems";
import "../css/Expenses.css";
import Card from "./Card";
import ExpensesFilter from "../expenseFilter/ExpenseFilter";

const Expenses = (props) => {
  const [filterdYear, setFilteredYear] = useState("2020");
  const expenses = props.data;
  const expenseFilterHandler = (filterYearChange) => {
    setFilteredYear(filterYearChange);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter getFilterYear={expenseFilterHandler} year={filterdYear} />
      {expenses.map((el) => (
        <ExpenseItem
          key={el.title}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
