import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import BackButton from '../landing/AccessBackButton';
import Registry from './Registry';

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
export default function RegistryManager({active}: RegistryProps) {
  const display = active ? 'flex' : 'none';
  const height = active ? '90%' : '0%';

  return (
    <View style={{...styles.wrap, display}}>
      <View style={{...styles.formWrapper, height}}>
        <Registry />
      </View>

      <View style={styles.backButtonWrapper}>
        <BackButton />
      </View>
    </View>
  );
} // RegistryManager

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
  copyrightText: {
    flex: 1,
  },
});
