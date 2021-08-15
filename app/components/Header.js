import React from 'react';
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native';

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
		height: 48,
    // backgroundColor: 'red',
  },
  back: {
    position: 'absolute',
		lineHeight: 40,
		left: 10
  },
  title: {
		lineHeight: 48,
		textAlign: 'center'
  },
});

export default Header;
