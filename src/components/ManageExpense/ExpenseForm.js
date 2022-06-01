import {StyleSheet, Button, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Input from './Input';
import {GlobalStyles} from '../../constants/styles';

export default function ExpenseForm({submitButtonLabel, onCancel, onSubmit}) {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: '',
  });
  // const [amount, setAmount] = useState('');
  // const [date, setDate] = useState('');

  // const [description, setDescription] = useState('');

  let buttonLabel = submitButtonLabel;

  const inputChangedHandler = (identifier, value) => {
    setInputValues(inputValues => {
      // console.log(value);
      return {
        ...inputValues,
        [identifier]: value,
      };
    });
  };

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
    // console.log('in submithandler' + expenseData.description);
    onSubmit(expenseData);
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          //   flex: 1,
          //   marginHorizontal: 10,
        }}>
        <Input
          style={styles.input}
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            // onChangeText: amount => setAmount(amount),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.input}
          label="Date"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            placeholder: 'YY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            // onChangeText: date => setDate(date),
            value: inputValues.date,
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          // onChangeText: description => setDescription(description),
          //   autoCapitalize: false,
          onChangeText: inputChangedHandler.bind(this, 'description'),
          //   value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button
          color={GlobalStyles.colors.primary400}
          //   color="#841584"
          //   style={{backgroundColor: 'red'}}
          onPress={onCancel}
          title="cancel"
        />
        <Button
          color={GlobalStyles.colors.primary400}
          onPress={submitHandler}
          title={buttonLabel}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: '100%',
    // width: '100%',
    // flex: 1,
    marginTop: 50,
    // justifyContent: 'space-around',
  },
  input: {
    // flex: 1,
    width: '48%',
  },
  buttons: {
    flexDirection: 'row',
    // width: '100%',
    justifyContent: 'space-evenly',
    marginTop: 16,
  },
});
