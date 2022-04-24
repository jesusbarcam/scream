import React from 'react';
import {View, StyleSheet} from 'react-native';

import AuthAccessButton from './AuthAccessButton';
import AuthActionsPanel from './AuthActionsPanel';

/**
 * @type
 * @Typescript
 */
type AuthAccessProps = {
  children: any;
}; // AuthAccessProps

/**
 * @Component
 * @React_component
 * @description
 */
export default function AuthAccess({children}: AuthAccessProps) {
  const authorizedUser = false;
  return (
    <View style={styles.wrap}>
      {authorizedUser ? <AuthAccessButton /> : <AuthActionsPanel />}
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
  },
}); // Styles
