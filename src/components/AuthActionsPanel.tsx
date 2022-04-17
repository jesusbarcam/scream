import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useUIColors} from '../hooks/UseUIColors';

/**
 * @Component
 * @React_component
 * @Description
 * This component is manager that
 * controls the all actions that the user
 * must perform in a matter of authorization
 * within the application.
 */
export default function AuthActionsPanel() {
  const {navigate} = useNavigation();
  const textColor = useUIColors('neutralColor', '100%', 0.85);

  return (
    <View style={styles.wrap}>
      <View style={styles.buttonsWrapper}>
        <Text style={{...styles.text, ...styles.button, color: textColor}} onPress={() => navigate('home' as never)}>
          Login
        </Text>
        <Text style={{...styles.text, color: textColor}}> Or </Text>
        <Text style={{...styles.text, ...styles.button, color: textColor}} onPress={() => navigate('home' as never)}>
          Registry
        </Text>
      </View>
    </View>
  );
} // AuthActionsPanel

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: '20%',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  buttonsWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: 22,
    fontWeight: '300',
  },
  button: {
    fontWeight: 'bold',
  },
});
