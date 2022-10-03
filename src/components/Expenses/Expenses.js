import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectYear, setSelectYear] = useState("2019");

  const selectFilter = (year) => {
    setSelectYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterYear={selectFilter} selected={selectYear} />
        {props.items.map((value) => {
          return (
            <ExpenseItem
              title={value.title}
              amount={value.amount}
              date={value.date}
            />
          );
        })}
      </Card>
    </div>
  );
};
export default Expenses;
