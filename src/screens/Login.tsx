import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';

interface Props {
  navigation: any;
}

/**
 * @component
 * @react_screen
 * @description
 */
export default function Login({navigation}: Props) {
  return (
    <View>
      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
        <Text>Ir al Home</Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
        <Text>Ir al Landing</Text>
      </TouchableHighlight>
    </View>
  );
} // LoginScreen
