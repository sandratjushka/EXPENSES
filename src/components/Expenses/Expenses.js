
import React, { useState } from 'react';
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] =
        useState('2023')

    console.log('Year data in Expenses.js' + filteredYear)

    const filterChangeHandler = (year) => {
        console.log('Filter change handled by Expenses.js')
        console.log(year + ' in Expenses.js')
        setFilteredYear(year)
    }
    const filteredExpenses = props.expenses.filter(
        (expense) => {
            return expense.date.getFullYear().toString() === filteredYear
        }
    )

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>

            {filteredExpenses.length === 0 && <p style={{color: 'white'}}>No expenses found.</p>}
            {filteredExpenses.length > 0 &&
                filteredExpenses.map((expense) => {
                    return <ExpenseItem
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    ></ExpenseItem>
                })
            }
        </Card>
    )
}

export default Expenses