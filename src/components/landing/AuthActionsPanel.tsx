import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {ApplicationContext} from '../../contexts/ApplicationContext';
import {Section} from '../../models/Section';
import {REGISTRY_SECTION_NAME} from '../../utils/ApplicationSettings';
import AuthActionsButtons from './AuthActionsButtons';
import RegistryContainer from '../registry/RegistryContainer';

/**
 * @type
 * @Typescript
 */
export const RegistryPanelName = 'registry';
export const LoginPanelName = 'login';
export const DeactivatePanelName = 'empty';
export type ActionPanel = typeof RegistryPanelName | typeof LoginPanelName | typeof DeactivatePanelName;

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
  const {state} = useContext(ApplicationContext);

  /**
   *
   * @method
   * @description
   * Check if current section is equal to
   * next section arrive from parameter
   */
  const isActivated = (section: Section) => {
    return state?.section === section;
  }; // IsActivated

  return (
    <View style={styles.wrap}>
      <RegistryContainer active={isActivated(REGISTRY_SECTION_NAME)} />
      <AuthActionsButtons />
    </View>
  );
} // AuthActionsPanel

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    height: '85%',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
});
