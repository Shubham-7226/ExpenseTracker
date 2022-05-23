import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExpensesSummery from './ExpensesSummery';
import ExpensesList from './ExpensesList';
import {GlobalStyles} from '../../constants/styles';

function ExpensesOutput({expenses, expensesPeriod}) {
  return (
    <View style={styles.container}>
      <ExpensesSummery expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
export default ExpensesOutput;
