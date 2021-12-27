import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import {isInteger, hasDecimalPoint} from './utils';
const LEN = 20;

const ContentTest = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectPos, setSelectPos] = useState(0);
  const [maxLength, setMaxLength] = useState(LEN);

  const resetMaxLen = () => {
    setMaxLength(LEN);
  };

  const onSelectionChange = e => {
    const {selection} = e.nativeEvent;
    const {start, end} = selection;
    if (start === end) {
      // selectAll can invoke this callback too
      const selPos = start;
      setSelectPos(selPos);

      if (inputValue === '' || isInteger(inputValue)) {
        resetMaxLen();
        return;
      }

      if (hasDecimalPoint(inputValue)) {
        const decimalIndex = inputValue.indexOf('.');
        if (decimalIndex >= selPos) {
          resetMaxLen();
        } else {
          if (inputValue.length - 1 === decimalIndex + 2) {
            const len = inputValue.indexOf('.');
            setMaxLength(len + 1 + 2);
          } else {
            resetMaxLen();
          }
        }
        // const len = inputValue.indexOf('.');
        // setMaxLength(len + 1 + 2);
      }
    }
  };

  const onChangeText = value => {
    setInputValue(value);
    // console.log('onChangeText');
  };

  const onKeyPress = e => {
    const v = e.nativeEvent.key;
    // if (v === '.') {
    //   if (inputValue.indexOf('.') === -1) {
    //     resetMaxLen();
    //   }
    // } else {
    //   resetMaxLen();
    // }
    console.log('AmountInputNew', v, maxLength);
  };

  const onPress = () => {
    console.log('onPress')
    setInputValue('123');
  };

  return (
    <View style={styles.inputContainer} pointerEvents="box-none">
      <TextInput
        value={inputValue}
        style={styles.input}
        // contextMenuHidden={true}
        keyboardType="decimal-pad"
        onChangeText={onChangeText}
        onSelectionChange={onSelectionChange}
        onKeyPress={onKeyPress}
        maxLength={maxLength}
      />
      <Button onPress={onPress} title='123'></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default ContentTest;
