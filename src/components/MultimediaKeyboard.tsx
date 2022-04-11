import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 * @Component
 * @React_component
 * @description
 */
export default function MultimediaKeyboard() {
  return (
    <View style={styles.wrap}>
      <View style={styles.keyboard}>
        <Text>Este es el keyboard de multimedia</Text>
      </View>
      {/* <View>
        <Text>Esto es el Landing</Text>
        <TouchableHighlight onPress={() => navigation.navigate('Login')}>
          <Text>Ir al Login Pogin</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Home')}>
          <Text>Ir al Home</Text>
        </TouchableHighlight>
      </View> */}
    </View>
  );
} // MultimediaKeyboard

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    bottom: 50,
    left: 20,
  },
  keyboard: {
    borderWidth: 2,
    borderColor: 'red',
  },
});
