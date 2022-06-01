import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
  // console.log(itemData);
  return <ExpenseItem {...itemData.item} />;
}

export default function ExpensesList({expenses}) {
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
