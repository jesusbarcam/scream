import React, {Fragment} from 'react';
import {StyleSheet, Text} from 'react-native';

import useFirebaseErrors from '../../hooks/UseFirebaseErrors';

/**
 * @React_component
 * @description
 */
export default function RegistryErrorDisplay({errorCode}: any) {
  const {getRegistryErrorMessage} = useFirebaseErrors();
  let message = getRegistryErrorMessage(errorCode);

  return <Fragment>{errorCode ? <Text style={styles.errorMessage}>{message}</Text> : null}</Fragment>;
} // RegistryErrorDisplay

const styles = StyleSheet.create({
  errorMessage: {
    marginTop: 10,
    color: 'red',
    fontSize: 13,
    fontWeight: '300',
    textAlign: 'center',
  },
});
