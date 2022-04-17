import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useUIColors} from '../hooks/UseUIColors';

export default function AuthActionsButtons({actionSelection}: any) {
  const color = useUIColors('neutralColor', '100%', 0.85);

  return (
    <View style={styles.wrap}>
      <Text style={{...styles.text, ...styles.button, color}} onPress={() => actionSelection('Login')}>
        Login
      </Text>
      <Text style={{...styles.text, color}}> Or </Text>
      <Text style={{...styles.text, ...styles.button, color}} onPress={() => actionSelection('Registry')}>
        Registry
      </Text>
    </View>
  );
} // AuthActionsButtons

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: 22,
    fontWeight: '300',
  },
  button: {
    fontWeight: 'bold',
  },
});
