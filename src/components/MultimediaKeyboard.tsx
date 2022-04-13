import React from 'react';
import {View, StyleSheet, Linking} from 'react-native';

import TouchableIcon from './TouchableIcon';
import {
  DEFAULT_TWITTER_URL,
  DEFAULT_FACEBOOK_URL,
  DEFAULT_INSTAGRAM_URL,
} from '../utils/ApplicationSettings';
import {useTheme} from '../hooks/UseTheme';

/**
 * @Component
 * @React_component
 * @description
 */
export default function MultimediaKeyboard() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [theme, toggleTheme] = useTheme();

  return (
    <View style={styles.wrap}>
      <View style={styles.keyboard}>
        <TouchableIcon
          name="facebook"
          onPress={() => Linking.openURL(DEFAULT_FACEBOOK_URL)}
        />

        <TouchableIcon
          name="twitter"
          onPress={() => Linking.openURL(DEFAULT_TWITTER_URL)}
        />

        <TouchableIcon
          name="instagram"
          onPress={() => Linking.openURL(DEFAULT_INSTAGRAM_URL)}
        />

        <TouchableIcon name="rocket" onPress={toggleTheme} />
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
