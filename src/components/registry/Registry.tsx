import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useUIColors} from '../../hooks/UseUIColors';
import RegistryForm from './RegistryForm';
import RegistryTitle from './RegistryTitle';
import RegistryTermsAndConditions from './RegistryTermsAndConditions';
import BigFormButton from '../shared/BigFormButton';

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
        <BigFormButton title="Registrar" />
      </SafeAreaView>
    </View>
  );
} // Registry

const styles = StyleSheet.create({
  wrap: {
    height: '100%',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
