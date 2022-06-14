import * as LocalAuthentication from 'expo-local-authentication';
import { useState } from 'react';

export const useLocalAuthentication = () => {
  const [authData, setAuthData] =
    useState<LocalAuthentication.LocalAuthenticationResult>();
  const [authLevel, setAuthLevel] =
    useState<LocalAuthentication.SecurityLevel>(0);
  const [authType, setAuthType] =
    useState<LocalAuthentication.AuthenticationType[]>();
  const [hasAuthHardward, setHasAuthHardward] = useState<Boolean>(false);

  const getAuthenticateAsync = async () => {
    try {
      let result = await LocalAuthentication.authenticateAsync();
      setAuthData(result);
    } catch (error) {
      console.log('authenticateAsync', error);
      setAuthData(undefined);
    }
  };

  const scanAuthLevel = async () => {
    let result = await LocalAuthentication.getEnrolledLevelAsync();
    setAuthLevel(result);
  };

  const scanAuthType = async () => {
    let result = await LocalAuthentication.supportedAuthenticationTypesAsync();
    setAuthType(result);
  };

  const scanAuthHardward = async () => {
    let result = await LocalAuthentication.hasHardwareAsync();
    setHasAuthHardward(result);
  };

  return {
    authData,
    authLevel,
    authType,
    hasAuthHardward,
    getAuthenticateAsync,
    scanAuthLevel,
    scanAuthType,
    scanAuthHardward,
  };
};
