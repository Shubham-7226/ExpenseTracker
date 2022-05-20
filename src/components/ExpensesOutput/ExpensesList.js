import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
  console.log(itemData);
  return (
    <ExpenseItem
      discription={itemData.item.discription}
      amount={itemData.item.amount}
      date={itemData.item.date}
    />
  );
}

export default function ExpensesList({expenses}) {
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={item => {
          item.id;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
