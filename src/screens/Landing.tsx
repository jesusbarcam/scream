import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import LandingLogo from '../components/LandingLogo';
import MultimediaKeyboard from '../components/MultimediaKeyboard';
import {darkId, useTheme} from '../hooks/UseTheme';
import {DarkThemeColours} from '../themes/dark';
import {LightThemeColours} from '../themes/light';

type LandingProps = {
  navigation: any;
  authorized: boolean;
}; // LandingProps

/**
 * @Component
 * @React_screen
 * @description
 */
export default function Landing({navigation, authorized}: LandingProps) {
  const {theme} = useTheme();
  let backgroundColor =
    theme === darkId
      ? DarkThemeColours.predominantColour
      : LightThemeColours.predominantColour;

  if (authorized) {
    navigation.navigate('Home');
  } // If

  return (
    <SafeAreaView style={{...styles.wrap, backgroundColor}}>
      <LandingLogo />
      <MultimediaKeyboard />
    </SafeAreaView>
  );
}

/**
 * @Styles
 * @description
 */
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
});
