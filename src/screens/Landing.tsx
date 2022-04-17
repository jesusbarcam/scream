import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

import MultimediaKeyboard from '../components/MultimediaKeyboard';
import LandingLogo from '../components/LandingLogo';
import AuthAccess from '../components/AuthAcces';
import {useUIColors} from '../hooks/UseUIColors';

/**
 * @Component
 * @React_screen
 * @description
 */
export default function Landing() {
  const backgroundColor = useUIColors('secondaryColor');

  return (
    <AuthAccess>
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
