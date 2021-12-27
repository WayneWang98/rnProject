import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import {isInteger, hasDecimalPoint} from './utils';
import SecurityKeyboard from './Keyboard';
const LEN = 20;

const ContentTest = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectPos, setSelectPos] = useState(0);
  const [maxLength, setMaxLength] = useState(LEN);
  const [selection, setSelection] = useState({start: 0, end: 0});

  const resetMaxLen = () => {
    setMaxLength(LEN);
  };

  const onSelectionChange = e => {
    const {selection: _selection} = e.nativeEvent;
    const {start, end} = _selection;
    setSelection({start, end});
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
      }
    }
  };

  const onChangeText = value => {
    setInputValue(value);
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

  const onKeydown = key => {
    console.log('onKeydown', key);
    if (inputValue === '' && key === 'delete') return;
    if (key === '.' && inputValue.indexOf('.') !== -1) return;
    if ((key !== 'delete' && key >= 0 && key <= 9) || key === '.') {
      const left = inputValue.substring(0, selectPos);
      const right = inputValue.substring(selectPos);
      const newVal = left + key + right;
      if (newVal.length <= maxLength) {
        setInputValue(newVal);
        setSelectPos(selectPos + 1);
        setSelection({
          start: selectPos + 1,
          end: selectPos + 1,
        });
      }
    } else if (key === 'delete') {
      const left = inputValue.substring(0, selectPos - 1);
      const right = inputValue.substring(selectPos);
      setInputValue(left + right);
      setSelectPos(selectPos - 1);
      setSelection({
        start: selectPos - 1,
        end: selectPos - 1,
      });
    }
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          value={inputValue}
          style={styles.input}
          // contextMenuHidden={true}
          showSoftInputOnFocus={false}
          selection={selection}
          keyboardType="decimal-pad"
          onChangeText={onChangeText}
          onSelectionChange={onSelectionChange}
          onKeyPress={onKeyPress}
          maxLength={maxLength}
        />
      </View>
      <SecurityKeyboard onKeydown={onKeydown} />
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
