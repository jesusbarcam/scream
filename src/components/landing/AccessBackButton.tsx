import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import {useUIColors} from '../../hooks/UseUIColors';
import {ApplicationContext} from '../../contexts/ApplicationContext';
import {LANDING_SECTION_NAME} from '../../utils/ApplicationSettings';
import {Section} from '../../models/Section';

/**
 * @Component
 * @React_component
 * @description
 */
export default function AccessBackButton() {
  const {state, setState} = useContext(ApplicationContext);
  // Colors from current theme
  const backgroundColor = useUIColors('neutralColor', '100%');
  /**
   * @method
   * @description
   */
  const changeSection = (section: Section) => {
    setState({...state, section});
  }; // ChangeSection

  return (
    <TouchableHighlight onPress={() => changeSection(LANDING_SECTION_NAME)}>
      <View style={{...styles.backButton, backgroundColor}}>
        <Text style={styles.innerButton}>Back</Text>
      </View>
    </TouchableHighlight>
  );
} // AccessBackButton

const styles = StyleSheet.create({
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  innerButton: {
    fontSize: 18,
  },
});
