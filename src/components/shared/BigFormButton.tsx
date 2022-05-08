import React from 'react';
import {TouchableHighlight, StyleSheet, View, Text} from 'react-native';

import {useUIColors} from '../../hooks/UseUIColors';

/**
 * @Component
 * @React_component
 * @description
 */
export default function BigFormButton({title, onPress}: any) {
  const backgroundColor = useUIColors('highlightColor');
  const color = useUIColors('highlightColor', '90%');

  return (
    <TouchableHighlight onPress={() => onPress()}>
      <View style={{...styles.wrap, backgroundColor}}>
        <Text style={{...styles.text, color}}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
} // BigFormButton

const styles = StyleSheet.create({
  wrap: {
    borderRadius: 5,
    paddingVertical: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
