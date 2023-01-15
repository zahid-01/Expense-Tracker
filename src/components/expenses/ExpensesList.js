import ExpenseItem from "./ExpenseItems";
import "../css/ExpensesList.css";

const ExpensesList = (props) => {
  if (props.filterData.length === 0) {
    return <p className="expenses-list__fallback">No data was found here</p>;
  }

  return (
    <ul className="expenses-list">
      {props.filterData.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
