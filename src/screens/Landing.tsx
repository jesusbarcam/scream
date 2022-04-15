import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthAccess from '../components/AuthAcces';

import LandingLogo from '../components/LandingLogo';
import MultimediaKeyboard from '../components/MultimediaKeyboard';
import {useUIColors} from '../hooks/UseUIColors';

type LandingProps = {
  navigation: any;
}; // LandingProps

/**
 * @Component
 * @React_screen
 * @description
 */
export default function Landing({navigation}: LandingProps) {
  const backgroundColor = useUIColors('secondaryColor');

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
