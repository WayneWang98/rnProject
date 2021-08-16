/*
  The Header Component of App
*/

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.back}>
        <Image source={require('../static/images/back_icon.png')} />
      </Text>
      <Text style={styles.title}>历史心情指数</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'relative',
  },
  back: {
    position: 'absolute',
    lineHeight: 40,
    left: 10,
  },
  title: {
    lineHeight: 48,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Header;
