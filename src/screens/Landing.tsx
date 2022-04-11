import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import LandingLogo from '../components/LandingLogo';
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
      {/* <View>
        <Text>Esto es el Landing</Text>
        <TouchableHighlight onPress={() => navigation.navigate('Login')}>
          <Text>Ir al Login Pogin</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Home')}>
          <Text>Ir al Home</Text>
        </TouchableHighlight>
      </View> */}
      <LandingLogo />
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
