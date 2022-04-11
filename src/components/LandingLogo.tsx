import React from 'react';
import {StyleSheet, View} from 'react-native';

import Logo from '../assets/images/logo.svg';
import BackgroundLogo from '../assets/images/Background.svg';

/**
 * @Component
 * @description
 */
export default function LandingLogo() {
  return (
    <View style={styles.logoWrapper}>
      <Logo style={styles.logoImage} />
      <BackgroundLogo style={styles.backgroundImage} />
    </View>
  );
} // LandingLogo

/**
 * @Styles
 * @description
 */
const styles = StyleSheet.create({
  logoWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logoImage: {
    position: 'absolute',
    width: '70%',
    height: '70%',
    zIndex: 1,
  },
  backgroundImage: {
    width: '160%',
    height: '160%',
    zIndex: 0,
    opacity: 0.65,
  },
});
