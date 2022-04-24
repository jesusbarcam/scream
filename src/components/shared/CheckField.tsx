import React, {useState, useEffect} from 'react';

import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {useUIColors} from '../../hooks/UseUIColors';

type CheckFieldProps = {
  summary?: string;
  style?: string;
  checkColor?: string;
  changeState: (state: boolean) => void;
};

/**
 * @Component
 * @React_component
 * @description
 */
export default function CheckField({changeState, summary, style, checkColor}: CheckFieldProps) {
  const [state, setState] = useState(false);
  const defaultColor = useUIColors('highlightColor');

  const color = checkColor ? checkColor : defaultColor;

  const getColor = () => {
    return checkColor ? checkColor : defaultColor;
  };

  const backgroundColor = state ? getColor() : 'transparent';
  /**
   * @method
   * @description
   */
  const changeLocalState = () => {
    const nextState = !state;
    setState(nextState);
    changeState(nextState);
  }; // ChangeState

  return (
    <View style={styles.wrap}>
      <TouchableHighlight onPress={() => changeLocalState()}>
        <View style={{...styles.checkbox, backgroundColor, borderColor: color}} />
      </TouchableHighlight>

      <Text style={{...styles.checkText, color}} {...style}>
        {summary}
      </Text>
    </View>
  );
} // CheckField
const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  checkbox: {
    width: 12,
    height: 12,
    marginRight: 5,
    borderWidth: 1,
  },
  checkText: {
    fontSize: 11,
  },
});
