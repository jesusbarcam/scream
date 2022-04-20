import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Section} from '../models/Section';
import {useUIColors} from '../hooks/UseUIColors';
import {ApplicationContext} from '../contexts/ApplicationContext';
import {LOGIN_SECTION_NAME, REGISTRY_SECTION_NAME} from '../utils/ApplicationSettings';

/**
 * @Component
 * @React_component
 * @description
 */
export default function AuthActionsButtons() {
  const {state, setState} = useContext(ApplicationContext);
  // Colors from current theme
  const backgroundColor = useUIColors('secondaryColor', '30%');
  const color = useUIColors('neutralColor', '100%');
  const detailsColor = useUIColors('neutralColor', '100%', 0.65);

  /**
   * @method
   * @description
   * Activate login or Registry section
   * when they are selected in authActionsButtons component
   */
  const sectionChange = (section: Section) => {
    setState({...state, section});
  }; // sectionChange

  return (
    <View style={{...styles.wrap}}>
      <View style={{...styles.inner, backgroundColor}}>
        <View style={styles.buttonsWrapper}>
          <Text style={{...styles.text, ...styles.button, color}} onPress={() => sectionChange(LOGIN_SECTION_NAME)}>
            Login
          </Text>
          <Text style={{...styles.text, color}}> Or </Text>
          <Text style={{...styles.text, ...styles.button, color}} onPress={() => sectionChange(REGISTRY_SECTION_NAME)}>
            Registry
          </Text>
        </View>

        <View style={styles.textsWrapper}>
          <Text style={{...styles.textDetails, color: detailsColor}}>
            Registrate para acceder a la app, o bien si ya dispones de una cuenta realiza el login
          </Text>
        </View>
      </View>
    </View>
  );
} // AuthActionsButtons

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inner: {
    padding: 25,
    marginTop: 30,
    width: '100%',
  },
  buttonsWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  textsWrapper: {
    marginTop: 5,
    alignItems: 'center',
    width: '85%',
  },
  text: {
    fontSize: 22,
    fontWeight: '300',
  },
  textDetails: {
    fontSize: 11,
    fontWeight: '300',
    textAlign: 'center',
  },
  button: {
    fontWeight: 'bold',
  },
});
