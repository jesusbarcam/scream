import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useUIColors} from '../../hooks/UseUIColors';

/**
 * @Component
 * @React_component
 * @description
 */
export default function RegistryTitle() {
  const color = useUIColors('secondaryColor');

  return (
    <View style={styles.wrap}>
      <Text style={{...styles.text, color}}>Si quieres gritar di nos como te podemos identificar</Text>
    </View>
  );
} // RegistryTitle

const styles = StyleSheet.create({
  wrap: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 25,
  },
  text: {
    width: '85%',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
