import {FirebaseError} from '../models/Firebase';

/**
 * @Registry_errors
 * @description
 */
export const firebaseRegistryErrors: FirebaseError[] = [
  {
    key: 'auth/email-already-in-use',
    message: 'El email seleccionado ya esta en uso por favor ingrese otro o recupere la cuenta referente a este email',
  },
  {
    key: 'auth/invalid-email',
    message: 'El email introducido no es valido',
  },
  {
    key: 'auth/operation-not-allowed',
    message: 'La operación de registro no esta habilitada en Firebase',
  },
  {
    key: 'auth/weak-password',
    message: 'El password introducido debe tener como mínimo 6 caracteres',
  },
];

/**
 * @React_hook
 * @description
 */
export default function useFirebaseErrors() {
  /**
   * @method
   * @param currentErrorCode
   * @param listErrors
   * @returns
   */
  const getErrorMessage = (currentErrorCode: string, listErrors: FirebaseError[]) => {
    if (currentErrorCode) {
      const currentError = listErrors.find(error => error.key === currentErrorCode);
      return currentError?.message;
    } // If
    return null;
  }; // GetRegistryErrorMessage
  return {getRegistryErrorMessage: (currentErrorCode: string) => getErrorMessage(currentErrorCode, firebaseRegistryErrors)};
} // UseFirebaseErrors
