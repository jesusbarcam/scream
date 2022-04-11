import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import LandingLogo from '../components/LandingLogo';
import MultimediaKeyboard from '../components/MultimediaKeyboard';
import {secondColor} from '../themes/colours';

interface Props {
  navigation: any;
  authorized: boolean;
}
/**
 * @Component
 * @React_screen
 * @description
 */
export default function Landing({navigation, authorized}: Props) {
  if (authorized) {
    navigation.navigate('Home');
  } // If

  return (
    <SafeAreaView style={styles.wrap}>
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
    backgroundColor: secondColor,
  },
});
