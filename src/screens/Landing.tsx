import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
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
    <View>
      <Text>Esto es el Landing</Text>
      <TouchableHighlight onPress={() => navigation.navigate('Login')}>
        <Text>Ir al Login</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
        <Text>Ir al Home</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Landing;
