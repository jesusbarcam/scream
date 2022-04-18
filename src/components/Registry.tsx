import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {ApplicationContext} from '../contexts/ApplicationContext';
import {useUIColors} from '../hooks/UseUIColors';
import {Section} from '../models/Section';
import {LANDING_SECTION_NAME} from '../utils/ApplicationSettings';

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
  const {state, setState} = useContext(ApplicationContext);
  const backgroundColor = useUIColors('neutralColor', '100%');
  const display = active ? 'flex' : 'none';
  const height = active ? '90%' : '0%';

  /**
   * @method
   * @description
   */
  const changeSection = (section: Section) => {
    setState({...state, section});
  }; // ChangeSection

  return (
    <View style={{...styles.wrap, display}}>
      <View style={{...styles.inner, backgroundColor, height}}>
        <Text>Esto es el registro!</Text>
      </View>
      <Button title="Back" onPress={() => changeSection(LANDING_SECTION_NAME)} />
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
  inner: {
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
});
