import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useUIColors} from '../hooks/UseUIColors';
import BackButton from './AccessBackButton';
import RegistryForm from './RegistryForm';

/**
 * @type
 * @Typescript
 */
type RegistryProps = {
  active: boolean;
};

/**
 * @component
 * @React_component
 * @description
 */
export default function Registry({active}: RegistryProps) {
  const display = active ? 'flex' : 'none';
  const height = active ? '90%' : '0%';

  return (
    <View style={{...styles.wrap, display}}>
      <View style={{...styles.formWrapper, height}}>
        <RegistryForm />
      </View>

      <View style={styles.backButtonWrapper}>
        <BackButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'flex-start',
    zIndex: 1,
  },
  formWrapper: {
    marginBottom: 20,
  },

  backButtonWrapper: {
    alignItems: 'center',
  },
});
