import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import {getFormattedDate} from '../../util/date';

export default function ExpenseItem({id, discription, amount, date}) {
  // console.log(discription);

  const navigation = useNavigation();
  const expensePressHandler = () => {
    navigation.navigate('ManageExpense', {expenseId: id});
  };

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.expenseItem}>
        <View>
          <Text style={styles.textBase}>{discription}</Text>
          <Text style={styles.amount}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.textBase}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    color: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowOffset: GlobalStyles.colors.primary500,
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  pressed: {
    opacity: 0.75,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  discription: {
    fonstsize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
});
