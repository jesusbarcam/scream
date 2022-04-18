import React from 'react';
import {createStackNavigator, StackNavigationOptions, StackNavigationProp} from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import Landing from '../screens/Landing';
import {useUIColors} from '../hooks/UseUIColors';
import {LANDING_SECTION_NAME, LOGIN_SECTION_NAME, DASHBOARD_SECTION_NAME} from '../utils/ApplicationSettings';

export type RootStackScreenNames = {
  [LANDING_SECTION_NAME]: undefined;
  [LOGIN_SECTION_NAME]: undefined;
  [DASHBOARD_SECTION_NAME]: undefined;
};

// Create type of Screen Sections names
export type ScreenSectionNameListProp = StackNavigationProp<RootStackScreenNames, typeof LANDING_SECTION_NAME>;

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
      <Stack.Screen name={LANDING_SECTION_NAME} component={Landing} options={{...navigationMainOptions, headerShown: false}} />
      <Stack.Screen name={LOGIN_SECTION_NAME} component={Login} options={navigationMainOptions} />
      <Stack.Screen name={DASHBOARD_SECTION_NAME} component={Dashboard} options={navigationMainOptions} />
    </Stack.Navigator>
  );
} // MainRouter
