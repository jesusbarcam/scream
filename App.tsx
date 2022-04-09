import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainRouter from './src/routers/Main';

/**
 * @component
 * @description
 */
const App = () => {
  return (
    <NavigationContainer>
      <MainRouter />
    </NavigationContainer>
  );
};

export default App;
