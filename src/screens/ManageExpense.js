import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useLayoutEffect} from 'react';
import IconButton from '../UI/IconButton';
import {GlobalStyles} from '../constants/styles';
import {ExpensesContext} from '../store/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';

export default function ManageExpense({route, navigation}) {
  const expensesCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  // console.log(editedExpenseId);

  // const {expenseId} = route.params;
  const isEditing = !!editedExpenseId;
  const selectedExpense = expensesCtx.expenses.find(
    expense => expense.id === editedExpenseId,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    // console.log(expensesCtx);
    expensesCtx.deleteExpense(editedExpenseId);

    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler(expenseData) {
    if (isEditing) {
      // console.log('in is editing');
      expensesCtx.updateExpense(editedExpenseId, {
        expenseData,
      });
      // console.log('updated');
    } else {
      // console.log('in confirmHandler' + expenseData.description);
      expensesCtx.addExpense(expenseData);
    }

    navigation.goBack();
  }

  return (
    <View style={styles.Container}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 28,
          color: 'white',
          marginTop: '20%',
        }}>
        Your Expense
      </Text>
      <View>
        <ExpenseForm
          submitButtonLabel={isEditing ? 'Update' : 'Add'}
          onCancel={cancelHandler}
          onSubmit={confirmHandler}
          defaultValues={selectedExpense}
        />
      </View>

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
