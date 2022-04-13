import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthAccess from '../components/AuthAcces';

import LandingLogo from '../components/LandingLogo';
import MultimediaKeyboard from '../components/MultimediaKeyboard';
import {darkId, useTheme} from '../hooks/UseTheme';
import {DarkThemeColours} from '../themes/dark';
import {LightThemeColours} from '../themes/light';

type LandingProps = {
  navigation: any;
}; // LandingProps

/**
 * @Component
 * @React_screen
 * @description
 */
export default function Landing({navigation}: LandingProps) {
  const {theme} = useTheme();

  let backgroundColor =
    theme === darkId
      ? DarkThemeColours.predominantColour
      : LightThemeColours.predominantColour;

  const authAccessNavigate = (screenName: string) => {
    console.log('***********************************************************');
    console.log('NAVIGATE TO -> ', screenName);
    console.log('***********************************************************');
    navigation.navigate(screenName);
  };

  return (
    <AuthAccess navigate={authAccessNavigate}>
      <SafeAreaView style={{...styles.wrap, backgroundColor}}>
        <LandingLogo />
        <MultimediaKeyboard />
      </SafeAreaView>
    </AuthAccess>
  );
}

/**
 * @Styles
 */
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
});
