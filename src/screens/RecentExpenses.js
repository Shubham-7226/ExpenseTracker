import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';
import {getDateMinusDays} from '../util/date';

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo;
  });

  // console.log(recentExpenses);
  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={recentExpenses} expensesPeriod="last 7 days" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
