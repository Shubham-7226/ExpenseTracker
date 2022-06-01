import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExpensesSummery from './ExpensesSummery';
import ExpensesList from './ExpensesList';
import {GlobalStyles} from '../../constants/styles';

function ExpensesOutput({expenses, expensesPeriod, fallBackText}) {
  let Content = <Text style={styles.infoText}> {fallBackText}</Text>;

  if (expenses?.length > 0) {
    Content = (
      <View style={{marginBottom: 50}}>
        <ExpensesList expenses={expenses} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ExpensesSummery expenses={expenses} periodName={expensesPeriod} />
      {Content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});
export default ExpensesOutput;
