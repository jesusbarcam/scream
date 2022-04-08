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
const Login = ({navigation}: Props) => {
  return (
    <View>
      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
        <Text>Ir al Login</Text>
      </TouchableHighlight>
    </View>
  );
}; // LoginScreen

export default Login;
