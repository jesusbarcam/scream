import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useUIColors} from '../hooks/UseUIColors';

export default function AuthActionsButtons({actionSelection}: any) {
  const backgroundColor = useUIColors('secondaryColor', '30%');
  const color = useUIColors('neutralColor', '100%');
  const detailsColor = useUIColors('neutralColor', '100%', 0.65);

  return (
    <View style={{...styles.wrap, backgroundColor}}>
      <View style={styles.buttonsWrapper}>
        <Text style={{...styles.text, ...styles.button, color}} onPress={() => actionSelection('Login')}>
          Login
        </Text>
        <Text style={{...styles.text, color}}> Or </Text>
        <Text style={{...styles.text, ...styles.button, color}} onPress={() => actionSelection('Registry')}>
          Registry
        </Text>
      </View>

      <View style={styles.textsWrapper}>
        <Text style={{...styles.textDetails, color: detailsColor}}>
          Registrate para acceder a la app, o bien si ya dispones de una cuenta realiza el login
        </Text>
      </View>
    </View>
  );
} // AuthActionsButtons

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '50%',
    marginTop: 85,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  textsWrapper: {
    marginTop: 5,
    alignItems: 'center',
    width: '85%',
  },
  text: {
    fontSize: 22,
    fontWeight: '300',
  },
  textDetails: {
    fontSize: 11,
    fontWeight: '300',
    textAlign: 'center',
  },
  button: {
    fontWeight: 'bold',
  },
});
