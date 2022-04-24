import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useUIColors} from '../hooks/UseUIColors';
import TextField from './TextField';
import PasswordFieldsGroup from './PasswordFieldsGroup';

/**
 * @Component
 * @React_component
 * @description
 */
export default function RegistryForm() {
  const backgroundColor = useUIColors('neutralColor', '100%');

  return (
    <View style={{...styles.wrap, backgroundColor}}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.formWrapper}>
          <View style={styles.titleWrap}>
            <Text style={styles.title}>Si quieres gritar di nos como te podemos identificar</Text>
          </View>

          <View style={styles.form}>
            <TextField placeholder="Nombre Usuario" />
            <TextField placeholder="Correo Electronico" />
            <PasswordFieldsGroup />
          </View>

          <View style={styles.copyrightWrap}>
            <Text style={styles.copyrightText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
            </Text>
          </View>

          <Button title="Registrar" />
        </View>
      </SafeAreaView>
    </View>
  );
} // RegistryForm

const styles = StyleSheet.create({
  wrap: {
    height: '100%',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    paddingVertical: 50,
    paddingHorizontal: 40,
  },

  safeArea: {
    flex: 1,
  },
  titleWrap: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    width: '85%',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  formWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  form: {
    flex: 1.5,
    justifyContent: 'space-between',
  },
  copyrightWrap: {
    flex: 2,
    justifyContent: 'center',
  },
  copyrightText: {
    fontSize: 12,
    textAlign: 'justify',
  },
});
