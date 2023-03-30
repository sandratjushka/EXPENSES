
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import {useState} from "react";
import NewExpense from "./components/NewExpenses/NewExpense";




const DUMMY_EXPENSES = [
    {
        id: 'e1',
        date: new Date(2024, 0, 10),
        title:'New book',
        amount: 30.99
    },
    {
        id: 'e2',
        date: new Date(2024, 0, 5),
        title:'Icecream',
        amount: 3.99
    },
    {
        id: 'e3',
        date: new Date(2023, 0, 26),
        title:'Kass',
        amount: 1.99
    },
    {
        id: 'e4',
        date: new Date(2023, 5, 15),
        title: 'Elevant',
        amount: 4
    }

]

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
    const [filteredYear, setFilteredYear] = useState('2023')
    const filterChangeHandler = (year) => {
        setFilteredYear(year)
    }


    const addExpensehandler = (expense) => {
        console.log('In App.js')
        setExpenses((previousExpenses) => {
            return [expense, ...previousExpenses]
        })
    }
    console.log(expenses)

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpensehandler}></NewExpense>
            <Expenses expenses={expenses}></Expenses>

        </div>
    );
}




export default App;