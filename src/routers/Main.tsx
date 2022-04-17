import React from 'react';
import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Landing from '../screens/Landing';
import {LANDING_SCREEN_NAME, LOGIN_SCREEN_NAME, HOME_SCREEN_NAME} from '../utils/ApplicationSettings';
import {useUIColors} from '../hooks/UseUIColors';

export type RootStackScreenNames = {
  [LANDING_SCREEN_NAME]: undefined;
  [LOGIN_SCREEN_NAME]: undefined;
  [HOME_SCREEN_NAME]: undefined;
};

// Create Stack navigator component
// and your default styles.
const Stack = createStackNavigator<RootStackScreenNames>();

/**
 * @component
 * @react_router
 * @description
 */
export default function MainRouter() {
  const backgroundColor = useUIColors('secondaryColor');

  const navigationMainOptions: StackNavigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor,
    },
  }; // NavigationBaseOptions

  return (
    <Stack.Navigator>
      <Stack.Screen name={LANDING_SCREEN_NAME} component={Landing} options={{...navigationMainOptions, headerShown: false}} />
      <Stack.Screen name={LOGIN_SCREEN_NAME} component={Login} options={navigationMainOptions} />
      <Stack.Screen name={HOME_SCREEN_NAME} component={Home} options={navigationMainOptions} />
    </Stack.Navigator>
  );
} // MainRouter
