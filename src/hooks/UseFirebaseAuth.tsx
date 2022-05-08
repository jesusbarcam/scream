import auth from '@react-native-firebase/auth';

/**
 * @React_hook
 * @description
 */
export function useFirebaseAuth() {
  /**
   * @method
   * @param email
   * @param password
   * @description
   * This method execute registry of users
   * with only yours email and password
   */
  const createUserWithEmailAndPassword = (email: string, password: string) => {
    return auth().createUserWithEmailAndPassword(email, password);
  }; // CreateUserWithEmailAndPassword

  return {createUserWithEmailAndPassword};
} // UseFirebaseAuth
