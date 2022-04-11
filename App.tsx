import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainRouter from './src/routers/Main';

/**
 * @react_component
 * @description
 */
export default function App() {
  return (
    <NavigationContainer>
      <MainRouter />
    </NavigationContainer>
  );
} // App
