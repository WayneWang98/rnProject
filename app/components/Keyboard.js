import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 200,
  },
});

const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 'delete'];

const SecurityKeyboard = props => {
  const {onKeydown} = props;
  const onKeyPress = key => {
    console.log('eky', key);
    onKeydown && onKeydown(key); 
  };

  return (
    <View style={styles.container}>
      {keys.map(item => {
        return (
          <TouchableOpacity
            key={item}
            onPress={() => {
              onKeyPress(item);
            }}>
            <View
              style={{
                padding: 5,
                backgroundColor: 'yellow',
                borderColor: 'black',
                borderBottomWidth: 1,
              }}>
              <Text>{item}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SecurityKeyboard;
