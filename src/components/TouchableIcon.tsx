import React from 'react';
import {TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {DEFAULT_ICON_SIZE} from '../utils/ApplicationSettings';
import {useUIColors} from '../hooks/UseUIColors';

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
export default function TouchableIcon({name, onPress, size}: TouchableIconProps) {
  const color = useUIColors('neutralColor', '100%', 0.35);

  // Calculate icon size
  const fontSize = size ?? DEFAULT_ICON_SIZE;

  return (
    <TouchableHighlight onPress={onPress}>
      <Icon name={name} style={{fontSize, color}} />
    </TouchableHighlight>
  );
} // TouchableIcon
