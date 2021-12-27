import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
const LEN = 20;

const ContentTest = () => {
  const [inputValue, setInputValue] = useState('');
  const [editable, setEditable] = useState(true);
  const [maxLength, setMaxLength] = useState(LEN);
  const [maskValue, setMaskValue] = useState('');
  const onChangeText = value => {
    console.log('onChangeText', value);
    setValue(format(value));
  };

  const format = v => {
    let value = v.replace(/[^\d.]/g, '').replace(/\.{2,}/g, '.');
    let dotLastIndex = value.lastIndexOf('.');
    if (value.indexOf('.') !== dotLastIndex) {
      let arr = value.split('');
      arr.splice(dotLastIndex, 1);
      console.log('value', arr);
      value = arr.join('');
    }
    return value;
  };

  const addThousand = (value) => {
    if (value !== String(parseInt(value))) {
      // value is not a integer
      let integer = value.split('.')[0];
    }
    return value
  }

  const setValue = value => {
    setInputValue(value);
    setMaskValue(value);
  };

  return (
    <View style={styles.inputContainer} pointerEvents="box-none">
      <Text style={styles.mask} pointerEvents="box-none">
        {maskValue}
      </Text>
      <TextInput
        value={inputValue}
        style={styles.input}
        keyboardType="decimal-pad"
        onChangeText={onChangeText}
        maxLength={maxLength}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    position: 'relative',
    height: 40,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  mask: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: '100%',
    color: '#000',
    zIndex: 100,
    paddingLeft: 4,
    fontSize: 12,
  },
  input: {
    position: 'absolute',
    width: '100%',
    borderColor: '#333',
    borderWidth: 1,
    color: '#fff',
    zIndex: 50,
    fontSize: 12,
    // backgroundColor: 'blue'
  },
});

export default ContentTest;
