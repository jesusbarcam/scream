import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useUIColors} from '../hooks/UseUIColors';

/**
 * @Component
 * @React_component
 * @description
 */
export default function RegistryForm() {
  const backgroundColor = useUIColors('neutralColor', '100%');

  return (
    <View style={{...styles.inner, backgroundColor}}>
      <SafeAreaView>
        <TextInput placeholder="Nombre" />
        <TextInput placeholder="Apellidos" />
        <TextInput placeholder="Correo Electronico" />
        <Button title="Registrar" />
      </SafeAreaView>
    </View>
  );
} // RegistryForm

const styles = StyleSheet.create({
  inner: {
    height: '100%',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    paddingVertical: 50,
    paddingHorizontal: 25,
  },
});
