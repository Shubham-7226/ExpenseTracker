import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

export default function RecentExpenses() {
  return (
    <View style={styles.container}>
      <ExpensesOutput expensesPeriod="last 7 days" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
