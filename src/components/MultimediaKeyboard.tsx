import React from 'react';
import {View, StyleSheet, TouchableHighlight, Linking} from 'react-native';

import Icon from 'react-native-vector-icons/Zocial';
import {
  facebookApplicationURL,
  twitterApplicationURL,
  instagramApplicationURL,
} from '../utils/ApplicationSettings';

/**
 * @Component
 * @React_component
 * @description
 */
export default function MultimediaKeyboard() {
  return (
    <View style={styles.wrap}>
      <View style={styles.keyboard}>
        <TouchableHighlight
          onPress={() => Linking.openURL(facebookApplicationURL)}>
          <Icon name="facebook" />
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => Linking.openURL(twitterApplicationURL)}>
          <Icon name="twitter" />
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => Linking.openURL(instagramApplicationURL)}>
          <Icon name="instagram" />
        </TouchableHighlight>
      </View>
    </View>
  );
} // MultimediaKeyboard

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    bottom: 50,
    left: 20,
  },
  keyboard: {
    borderWidth: 2,
    borderColor: 'red',
  },
});
