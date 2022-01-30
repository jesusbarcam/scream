import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {MainStyleSheet} from './src/themes/main';
import {useTheme} from './src/hooks/UseTheme';

const App = () => {
  const currentTheme = useTheme();
  return (
    <SafeAreaView style={[MainStyleSheet.appStyle, currentTheme.background]}>
      <View style={MainStyleSheet.container}>
        <View
          style={[
            MainStyleSheet.testBox,
            {backgroundColor: currentTheme.highlightColour},
          ]}
        />
        <Text style={[MainStyleSheet.paragraph, currentTheme.text]}>
          Esto es el inicio de algo muy bonito!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
