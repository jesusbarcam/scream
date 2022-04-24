import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useUIColors} from '../../hooks/UseUIColors';
import RegistryForm from './RegistryForm';
import RegistryTitle from './RegistryTitle';
import RegistryTermsAndConditions from './RegistryTermsAndConditions';

/**
 * @Component
 * @React_component
 * @description
 */
export default function Registry() {
  const backgroundColor = useUIColors('neutralColor', '100%');

  return (
    <View style={{...styles.wrap, backgroundColor}}>
      <SafeAreaView style={styles.safeArea}>
        <RegistryTitle />
        <RegistryForm />
        <RegistryTermsAndConditions />
        <Button title="Registrar" />
      </SafeAreaView>
    </View>
  );
} // Registry

const styles = StyleSheet.create({
  wrap: {
    height: '100%',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    paddingVertical: 50,
    paddingHorizontal: 40,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
