/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Header from './app/components/Header';
import Content from './app/components/Content';
import ContentTest from './app/components/ContentTest';

const App: () => Node = () => {
  const backgroundStyle = {
    backgroundColor: '#fff',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Header style={styles.header} />
      {/* <Content style={styles.content} /> */}
      <ContentTest />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  content: {
    flex: 9,
  },
});

export default App;
