import React from 'react';
import {View, StyleSheet} from 'react-native';

import AuthAccessButton from './AuthAccessButton';
import AuthActionsPanel from './AuthActionsPanel';

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
  const authorizedUser = false;
  return (
    <View style={styles.wrap}>
      {authorizedUser ? (
        // Create enter component
        <AuthAccessButton navigate={navigate} />
      ) : (
        // Create Login or Registry component
        <AuthActionsPanel />
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
    borderWidth: 2,
  },
}); // Styles
