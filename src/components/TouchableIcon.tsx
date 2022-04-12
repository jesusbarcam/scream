import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {DEFAULT_ICON_SIZE} from '../utils/ApplicationSettings';

type TouchableIconProps = {
  name: string;
  onPress: any;
  fontSize?: number;
};

/**
 * @Component
 * @React_component
 * @description
 */
export default function TouchableIcon({
  name,
  onPress,
  fontSize,
}: TouchableIconProps) {
  // Calculate icon size
  const size = fontSize ?? DEFAULT_ICON_SIZE;

  return (
    <TouchableHighlight onPress={onPress}>
      <Icon name={name} style={{...styles.icon, fontSize: size}} />
    </TouchableHighlight>
  );
} // TouchableIcon

const styles = StyleSheet.create({
  icon: {
    color: 'white',
    opacity: 0.5,
  },
}); // Styles
