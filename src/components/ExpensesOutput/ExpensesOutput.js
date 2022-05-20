import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExpensesSummery from './ExpensesSummery';
import ExpensesList from './ExpensesList';
import {GlobalStyles} from '../../constants/styles';

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
    date: new Date('2020-12-01'),
  },
];
function ExpensesOutput({expenses, expensesPeriod}) {
  return (
    <View style={styles.container}>
      <ExpensesSummery expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
export default ExpensesOutput;
