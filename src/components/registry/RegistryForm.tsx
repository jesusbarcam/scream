import React from 'react';
import {View, StyleSheet} from 'react-native';

import TextField from '../shared/TextField';
import PasswordFieldsGroup from './PasswordFieldsGroup';

/**
 * @Component
 * @React_component
 * @description
 */
export default function RegistryForm() {
  return (
    <View style={styles.form}>
      <TextField placeholder="Nombre Usuario" />
      <TextField placeholder="Correo Electronico" />
      <PasswordFieldsGroup />
    </View>
  );
} // Registry Form

const styles = StyleSheet.create({
  form: {
    flex: 1.5,
    justifyContent: 'space-between',
  },
});
