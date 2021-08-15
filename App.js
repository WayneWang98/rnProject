/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Header from './app/components/Header';
import Content from './app/components/Content';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    backgroundColor: '#fff',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Header style={styles.header} />
      <Content style={styles.content} />
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
