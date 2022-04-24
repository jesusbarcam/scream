import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useUIColors} from '../../hooks/UseUIColors';
import CheckField from '../shared/CheckField';

/**
 * @Component
 * @React_component
 * @description
 */
export default function RegistryTermsAndConditions() {
  const color = useUIColors('primaryColor', '35%');

  /**
   * @method
   * @description
   */
  const whenCheckBoxChanged = (state: boolean) => {
    console.log('El CheckField state ha cambiado -> ', state);
  }; // WhenCheckBoxChanged

  return (
    <View style={styles.wrap}>
      <Text style={{...styles.text, color}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting,
      </Text>
      <CheckField summary="Estoy de acuerdo con los terminos y condiciones" changeState={state => whenCheckBoxChanged(state)} />
    </View>
  );
} // RegistryTermsAndConditions

const styles = StyleSheet.create({
  wrap: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 11,
    fontWeight: '200',
    textAlign: 'justify',
  },
});
