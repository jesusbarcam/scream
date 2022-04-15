import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import {useUIColors} from '../hooks/UseUIColors';
import {MainStyleSheet} from '../themes/main';
import {HOME_COMPONENT_NAME} from '../utils/ApplicationSettings';

/**
 * @Component
 * @React_component
 * @description
 */
export default function AuthAccessButton({navigate}: any) {
  const backgroundColor = useUIColors('secondaryColor', '35%');
  const color = useUIColors('neutralColor', '100%');
  return (
    <View style={styles.wrap}>
      <TouchableHighlight style={{...styles.button, backgroundColor}} onPress={() => navigate(HOME_COMPONENT_NAME)}>
        <Text style={(MainStyleSheet.fontFamily, {...styles.buttonText, color})}>Enter</Text>
      </TouchableHighlight>
    </View>
  );
} // AuthAccessButton

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '25%',
    zIndex: 1,
  },
  button: {
    borderRadius: 3,
    padding: 10,
    paddingHorizontal: 50,
    justifyContent: 'center',
    elevation: 10,
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 25,
  },
});
