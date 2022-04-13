import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Landing from '../screens/Landing';
import {secondColor} from '../themes/colours';
import {
  LANDING_COMPONENT_NAME,
  LOGIN_COMPONENT_NAME,
  HOME_COMPONENT_NAME,
} from '../utils/ApplicationSettings';

// Create Stack navigator component
// and your default styles.
const Stack = createStackNavigator();
const navigationMainOptions: StackNavigationOptions = {
  title: '',
  headerStyle: {
    backgroundColor: secondColor,
  },
}; // NavigationBaseOptions

/**
 * @component
 * @react_router
 * @description
 */
export default function MainRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={LANDING_COMPONENT_NAME}
        component={Landing}
        options={{...navigationMainOptions, headerShown: false}}
      />
      <Stack.Screen
        name={LOGIN_COMPONENT_NAME}
        component={Login}
        options={navigationMainOptions}
      />
      <Stack.Screen
        name={HOME_COMPONENT_NAME}
        component={Home}
        options={navigationMainOptions}
      />
    </Stack.Navigator>
  );
} // MainRouter
