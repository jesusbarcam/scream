import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {MainStyleSheet} from './src/themes/main';
import {useTheme} from './src/hooks/UseTheme';

import HomeScreen from './src/screens/home';

const App = () => {
  const currentTheme = useTheme();
  return (
    <NavigationContainer>
      <SafeAreaView style={[MainStyleSheet.appStyle, currentTheme.background]}>
        <View style={MainStyleSheet.container}>
          <View
            style={[
              MainStyleSheet.testBox,
              {backgroundColor: currentTheme.highlightColour},
            ]}
          />
          <Text style={[MainStyleSheet.paragraph, currentTheme.text]}>
            <HomeScreen></HomeScreen>
          </Text>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
