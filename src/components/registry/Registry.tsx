import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useUIColors} from '../../hooks/UseUIColors';
import {useFirebaseAuth} from '../../hooks/UseFirebaseAuth';
import {useFirebaseUsersCollection} from '../../hooks/UseFirebaseUserCollection';
import RegistryTermsAndConditions from './RegistryTermsAndConditions';
import RegistryErrorDisplay from './RegistryErrorDisplay';
import BigFormButton from '../shared/BigFormButton';
import RegistryTitle from './RegistryTitle';
import RegistryForm from './RegistryForm';

/**
 * @Component
 * @React_component
 * @description
 */
export default function Registry() {
  const [state, setState] = useState({error: null});
  const backgroundColor = useUIColors('neutralColor', '100%');

  const {createUserWithEmailAndPassword} = useFirebaseAuth();
  const {addUserInFirebase} = useFirebaseUsersCollection();

  /**
   * @method
   * @description
   */
  const executeRegistry = () => {
    const userData = {name: 'Jesus Antonio', surname: 'Barajas Camacho'};

    createUserWithEmailAndPassword('jesusbarcam@gmail.com', '349434')

      .then(({additionalUserInfo, user}: any) => {
        addUserInFirebase(user.uid, user.email, userData);
      })
      .catch(err => setState({error: err.code})); // Catch
  }; // ExecuteRegistry

  return (
    <View style={{...styles.wrap, backgroundColor}}>
      <SafeAreaView style={styles.safeArea}>
        <RegistryTitle />
        <RegistryForm />
        <RegistryTermsAndConditions />
        <BigFormButton title="Registrar" onPress={executeRegistry} />
        <RegistryErrorDisplay errorCode={state.error} />
      </SafeAreaView>
    </View>
  );
} // Registry

const styles = StyleSheet.create({
  wrap: {
    height: '100%',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
