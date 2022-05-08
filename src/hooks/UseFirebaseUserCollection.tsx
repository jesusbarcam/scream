import firestore from '@react-native-firebase/firestore';

import {UserMetadata} from '../models/User';

export const USERS_FIREBASE_COLLECTION_NAME: string = 'Users';

/**
 * @React_hook
 * @description
 */
export const useFirebaseUsersCollection = () => {
  /**
   * @method
   * @param id
   * @param email
   * @param userMetadata
   * @description
   */
  const addUserInFirebase = (id: string, email: string, userMetadata: UserMetadata) => {
    firestore()
      .collection(USERS_FIREBASE_COLLECTION_NAME)
      .add({...userMetadata, id, email})
      .then(respuesta => {
        console.log('HEMOS CREADO LOS DATOS DEL USUARIO EN LA BD -> ', respuesta);
      })
      .catch(err => console.error('ERROR -----> ', err));
  }; // InsertUserInFirestore

  return {addUserInFirebase};
}; // UseFirebaseUsersCollection
