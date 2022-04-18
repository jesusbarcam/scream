import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useUIColors} from '../hooks/UseUIColors';

/**
 * @Component
 * @React_component
 * @description
 */
export default function Dashboard() {
  const backgroundColor = useUIColors('secondaryColor');
  return (
    <View style={{...styles.wrap, backgroundColor}}>
      <Text>Dashboard view activated!</Text>
    </View>
  );
} // Dashboard

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
});
