import React from 'react';
import {StyleSheet, View} from 'react-native';

import PasswordField from './PasswordField';

/**
 * @Component
 * @React_component
 * @description
 */
export default function PasswordFieldsGroup() {
  return (
    <View style={styles.wrap}>
      <View style={styles.inner}>
        <PasswordField placeholder="Contraseña" />
      </View>
      <View style={styles.inner}>
        <PasswordField placeholder="Repetir Contraseña" />
      </View>
    </View>
  );
} // PasswordFields

const styles = StyleSheet.create({
  wrap: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },
  inner: {
    width: '48%',
  },
});
