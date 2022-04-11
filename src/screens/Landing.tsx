import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {secondColor} from '../themes/colours';

import Logo from '../assets/images/logo.svg';

interface Props {
  navigation: any;
  authorized: boolean;
}
/**
 * @component
 * @react_screen
 * @description
 */
const Landing = ({navigation, authorized}: Props) => {
  if (authorized) {
    navigation.navigate('Home');
  } // If

  return (
    <SafeAreaView style={landingStyleSheet.wrap}>
      {/* <View>
        <Text>Esto es el Landing</Text>
        <TouchableHighlight onPress={() => navigation.navigate('Login')}>
          <Text>Ir al Login Pogin</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Home')}>
          <Text>Ir al Home</Text>
        </TouchableHighlight>
        
      </View> */}
      <View style={landingStyleSheet.logoWrapper}>
        <Logo style={landingStyleSheet.logoImage} />
      </View>
    </SafeAreaView>
  );
};

const landingStyleSheet = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: secondColor,
  },
  logoWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logoImage: {
    width: '70%',
    height: '70%',
    zIndex: 0,
  },
});

export default Landing;
