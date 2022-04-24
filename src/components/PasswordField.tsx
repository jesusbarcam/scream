import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useUIColors} from '../hooks/UseUIColors';

import TextField from './TextField';
import TouchableIcon from './TouchableIcon';

export const VISIBILITY_ICON_NAME = 'eye';
export const UNVISIBILITY_ICON_NAME = 'eye-slash';

/**
 * @Component
 * @React_component
 * @description
 */
export default function PasswordField(parameters: any) {
  const [state, setState] = useState<boolean>(true);
  const color = useUIColors('secondaryColor', '50%', 0.5);

  const iconName = state ? UNVISIBILITY_ICON_NAME : VISIBILITY_ICON_NAME;

  return (
    <View style={styles.wrap}>
      <TextField {...parameters} placeholderTextColor={color} secureTextEntry={state} style={{...styles.field, ...parameters?.style}} />

      <View style={styles.iconWrapper}>
        <TouchableIcon style={{...styles.icon, color}} name={iconName} onPress={() => setState(!state)} />
      </View>
    </View>
  );
} // PasswordField

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
  },
  iconWrapper: {
    right: 35,
    zIndex: 1,
  },
  icon: {
    fontSize: 15,
    padding: 10,
  },
  field: {
    paddingEnd: 30,
    width: '100%',
  },
});
