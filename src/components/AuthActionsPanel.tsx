import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useUIColors} from '../hooks/UseUIColors';
import AuthActionsButtons from './AuthActionsButtons';

/**
 * @Component
 * @React_component
 * @Description
 * This component is manager that
 * controls the all actions that the user
 * must perform in a matter of authorization
 * within the application.
 */
export default function AuthActionsPanel() {
  const {navigate} = useNavigation();

  /**
   * @method
   * @description
   * Activate login or Registry section
   * when they are selected in authActionsButtons component
   */
  const actionSelection = (action: string) => {
    console.log('Activamos el ' + action);
  };

  return (
    <View style={styles.wrap}>
      <AuthActionsButtons actionSelection={actionSelection} />
    </View>
  );
} // AuthActionsPanel

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: '20%',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
});
