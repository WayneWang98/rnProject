/*
  The Content Component of App
*/

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './Card';

const Content = () => {
  return (
    <View style={styles.content}>
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default Content;
