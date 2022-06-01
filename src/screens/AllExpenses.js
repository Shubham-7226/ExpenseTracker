import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useContext} from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';
import {NativeModules} from 'react-native';
const {CalendarModule} = NativeModules;

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const NewModuleButton = () => {
    CalendarModule.createCalendarEvent('Shubham', 'Ahemdabad');
  };

  return (
    <View style={styles.container}>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={NewModuleButton}
      />
      <ExpensesOutput
        expenses={expensesCtx.expenses}
        expensesPeriod="Total"
        fallBackText="No expenses registered found."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
