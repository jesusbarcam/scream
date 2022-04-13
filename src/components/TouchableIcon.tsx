import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {DEFAULT_ICON_SIZE} from '../utils/ApplicationSettings';
import {darkId, useTheme} from '../hooks/UseTheme';
import {DarkThemeColours} from '../themes/dark';
import {LightThemeColours} from '../themes/light';

type TouchableIconProps = {
  name: string;
  onPress: any;
  size?: number;
};

/**
 * @Component
 * @React_component
 * @description
 */
export default function TouchableIcon({
  name,
  onPress,
  size,
}: TouchableIconProps) {
  const {theme} = useTheme();

  // Calculate icon size
  const fontSize = size ?? DEFAULT_ICON_SIZE;
  const color =
    theme === darkId
      ? DarkThemeColours.secondaryColour
      : LightThemeColours.secondaryColour;

  return (
    <TouchableHighlight onPress={onPress}>
      <Icon name={name} style={{...styles.icon, fontSize, color}} />
    </TouchableHighlight>
  );
} // TouchableIcon

const styles = StyleSheet.create({
  icon: {
    opacity: 0.5,
  },
}); // Styles
