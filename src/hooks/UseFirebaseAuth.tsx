import auth from '@react-native-firebase/auth';

import {UserMetadata} from '../models/User';
import {useFirebaseUsersCollection} from './UseFirebaseUserCollection';

/**
 * @React_hook
 * @description
 */
export function useFirebaseAuth() {
  const {addUserInFirebase} = useFirebaseUsersCollection();
  /**
   * @method
   * @param email
   * @param password
   * @description
   * This method execute registry of users
   * with only yours email and password
   */
  const createUserWithEmailAndPassword = (email: string, password: string, userData: UserMetadata) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({additionalUserInfo, user}: any) => {
        addUserInFirebase(user.uid, user.email, userData);
        return true;
      })
      .catch(err => {
        console.error('CREATE USER ERROR -> ', err);
        return err;
      });
  }; // CreateUserWithEmailAndPassword

  return {createUserWithEmailAndPassword};
} // UseFirebaseAuth
