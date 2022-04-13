import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainRouter from './src/routers/Main';
import {ApplicationContextProvider} from './src/contexts/ApplicationContext';

/**
 * @react_component
 * @description
 */
export default function App() {
  return (
    <ApplicationContextProvider>
      <NavigationContainer>
        <MainRouter />
      </NavigationContainer>
    </ApplicationContextProvider>
  );
} // App
