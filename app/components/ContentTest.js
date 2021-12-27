import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import AmountInput from './AmountInput';
import AmountInputNew from './AmountInputNew';

const LEN = 20;

const ContentTest = () => {
  return (
    <View style={styles.content}>
      <Text>input</Text>
      {/* <AmountInput /> */}
      <AmountInputNew />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default ContentTest;
