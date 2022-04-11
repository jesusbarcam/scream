import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {secondColor} from '../themes/colours';
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
      <View>
        <Text>Esto es el Landing</Text>
        <TouchableHighlight onPress={() => navigation.navigate('Login')}>
          <Text>Ir al Login Pogin</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Home')}>
          <Text>Ir al Home</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const landingStyleSheet = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: secondColor,
  },
});

export default Landing;
