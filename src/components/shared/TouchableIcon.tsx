import React from 'react';
import {TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {DEFAULT_ICON_SIZE} from '../../utils/ApplicationSettings';

/**
 * @Component
 * @React_component
 * @description
 */
export default function TouchableIcon(parameters: any) {
  // Calculate icon size
  const fontSize = parameters?.size ?? DEFAULT_ICON_SIZE;

  return (
    <TouchableHighlight {...parameters?.onPress}>
      <Icon {...parameters} style={{fontSize, ...parameters?.style}} />
    </TouchableHighlight>
  );
} // TouchableIcon
