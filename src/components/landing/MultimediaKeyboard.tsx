import React from 'react';
import {View, StyleSheet, Linking} from 'react-native';

import TouchableIcon from '../shared/TouchableIcon';
import {useTheme} from '../../hooks/UseTheme';
import {DEFAULT_TWITTER_URL, DEFAULT_FACEBOOK_URL, DEFAULT_INSTAGRAM_URL} from '../../utils/ApplicationSettings';
import {useUIColors} from '../../hooks/UseUIColors';

/**
 * @Component
 * @React_component
 * @description
 */
export default function MultimediaKeyboard() {
  const {theme, toggleTheme} = useTheme();
  const iconsColor = useUIColors('neutralColor', '100%', 0.35);

  return (
    <View style={styles.wrap}>
      <View style={styles.keyboard}>
        <TouchableIcon name="facebook" color={iconsColor} onPress={() => Linking.openURL(DEFAULT_FACEBOOK_URL)} />

        <TouchableIcon name="twitter" color={iconsColor} onPress={() => Linking.openURL(DEFAULT_TWITTER_URL)} />

        <TouchableIcon name="instagram" color={iconsColor} onPress={() => Linking.openURL(DEFAULT_INSTAGRAM_URL)} />

        {/*
        FIXME:
        Quitar el boton de cambio de tema de esta parte
        y ponerlo en la vista de settings*/}
        <TouchableIcon name="rocket" color={iconsColor} onPress={toggleTheme} />
      </View>
    </View>
  );
} // MultimediaKeyboard

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    bottom: 50,
    left: '10%',
    right: '10%',
    width: '100%',
  },
  keyboard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});
