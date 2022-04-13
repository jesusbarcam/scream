import React from 'react';
import {Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

/**
 * @Component
 * @React_component
 * @description
 */
export default function AuthAccessButton({navigate}: any) {
  return (
    <View style={styles.wrap}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigate('Home')}>
        <Text>Enter</Text>
      </TouchableHighlight>
    </View>
  );
} // AuthAccessButton

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '25%',
    zIndex: 1,
  },
  button: {
    fontSize: '375px',
    borderWidth: 1,
    borderColor: 'red',
    width: 60,
  },
});
