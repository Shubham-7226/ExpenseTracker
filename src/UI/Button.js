import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {GlobalStyles} from '../constants/styles';

const Button = ({children, onPress, mode, style}) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}>
        <View style={[styles.btn, mode === 'flat' && styles.flat]}>
          <Text style={[styles.btnText, mode === 'flat' && styles.flatTxt]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 5,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  flatTxt: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 5,
  },
});

export default Button;
