import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

import {useUIColors} from '../../hooks/UseUIColors';

/**
 * @Component
 * @React_component
 * @description
 */
export default function TextField(parameters: any) {
  const color = useUIColors('secondaryColor');
  const placeholderColor = useUIColors('secondaryColor', '50%', 0.3);
  const backgroundColor = useUIColors('primaryColor', '95%');

  return (
    <TextInput
      textContentType="emailAddress"
      placeholderTextColor={placeholderColor}
      {...parameters}
      style={{...parameters.style, ...styles.input, backgroundColor, color}}
    />
  );
} // TextField

const styles = StyleSheet.create({
  input: {
    padding: 8,
    borderRadius: 5,
  },
});
