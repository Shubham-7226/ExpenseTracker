import React from 'react';
import {createContext, useReducer} from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    discription: 'A pair of shoes',
    amount: 59.59,
    date: new Date('2000-12-01'),
  },
  {
    id: 'e2',
    discription: 'pair of banana',
    amount: 412,
    date: new Date('2012-05-15'),
  },
  {
    id: 'e3',
    discription: 'pair of book',
    amount: 53,
    date: new Date('2019-09-06'),
  },
  {
    id: 'e4',
    discription: 'mouse of logitech',
    amount: 600,
    date: new Date('2001-03-04'),
  },
  {
    id: 'e5',
    discription: 'water bottle',
    amount: 20,
    date: new Date('2022-05-22'),
  },
  // {
  //   id: 'e6',
  //   discription: 'pair of book',
  //   amount: 53,
  //   date: new Date('2019-09-06'),
  // },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  deleteExpense: ({id}) => {},
  updateExpense: (id, {description, amount, date}) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id: id}, ...state];

    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        expense => expense.id === action.payload.id,
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = {...updatableExpense, ...action.payload.data};
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;

    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);

    default:
      return state;
  }
}

function ExpensesContextProvider({children}) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense({expenseData}) {
    dispatch({type: 'ADD', payload: expenseData});
  }

  const updateExpense = (id, expenseData) => {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
  };

  const deleteExpense = id => {
    dispatch({type: 'DELETE', payload: id});
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
