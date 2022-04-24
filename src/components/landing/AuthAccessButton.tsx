import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useUIColors} from '../../hooks/UseUIColors';
import {MainStyleSheet} from '../../themes/main';
import {ScreenSectionNameListProp} from '../../routers/Main';
import {DASHBOARD_SECTION_NAME} from '../../utils/ApplicationSettings';

/**
 * @Component
 * @React_component
 * @description
 */
export default function AuthAccessButton() {
  const router = useNavigation<ScreenSectionNameListProp>();
  const backgroundColor = useUIColors('secondaryColor', '30%');
  const color = useUIColors('neutralColor', '100%');
  const detailsColor = useUIColors('neutralColor', '100%', 0.65);

  return (
    <View style={styles.wrap}>
      <View style={{...styles.buttonWrapper, backgroundColor}}>
        <TouchableHighlight onPress={() => router.navigate(DASHBOARD_SECTION_NAME)}>
          <Text style={(MainStyleSheet.fontFamily, {...styles.buttonText, color})}>Enter</Text>
        </TouchableHighlight>
        <Text style={{...styles.summary, color: detailsColor}}>Haz click para disfrutar de la diversión de gritar sin sentido</Text>
      </View>
    </View>
  );
} // AuthAccessButton

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '25%',
    zIndex: 1,
  },
  buttonWrapper: {
    width: '100%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  summary: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 12,
    width: '70%',
  },
});
