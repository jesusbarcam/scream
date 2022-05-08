export interface UserMetadata {
  uid?: string;
  email?: string;
  name: string;
  surname: string;
  address?: string;
} // UserMetadata

export interface UserAuthenticationData {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: UserMetadata;
  phoneNumber: number;
  photoURL: string;
  providerData: string[];
  providerId: string;
  refreshToken: string;
  tenantId: string;
} // UserAuthenticationData

export interface User {
  personalData: UserMetadata;
  authenticationData: UserAuthenticationData;
} // User
