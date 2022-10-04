import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = (props) => {
  let expenseContent = <p>No expense found.</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> Found no expense</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((value) => {
        return (
          <ExpenseItem
            key={value.id}
            title={value.title}
            amount={value.amount}
            date={value.date}
          />
        );
      })}
      ;
    </ul>
  );
};
export default ExpenseList;
