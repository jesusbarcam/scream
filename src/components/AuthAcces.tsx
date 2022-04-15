import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import AuthAccessButton from './AuthAccessButton';

type AuthAccessProps = {
  children: any;
  navigate: any;
};

/**
 * @Component
 * @React_component
 * @description
 */
export default function AuthAccess({children, navigate}: AuthAccessProps) {
  const authorizedUser = true;
  return (
    <View style={styles.wrap}>
      {authorizedUser ? (
        // Create enter component
        <AuthAccessButton navigate={navigate} />
      ) : (
        // Create Login or Registry component
        <View style={styles.accessWrap}>
          <Text>Login or Registry!</Text>
          <Button title="Login" onPress={() => navigate('Home')} />
          <Button title="Registry" onPress={() => navigate('Home')} />
        </View>
      )}

      <View style={styles.wrap}>{children}</View>
    </View>
  );
} // AuthAccess

/**
 * @Styles
 */
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  accessWrap: {
    width: '100%',
    position: 'absolute',
    zIndex: 1,
  },
}); // Styles
