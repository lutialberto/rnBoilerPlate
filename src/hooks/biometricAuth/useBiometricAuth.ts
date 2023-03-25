import {useEffect, useState} from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

export const useBiometricAuth = () => {
  const [isSupportedByDevice, setIsSupportedByDevice] = useState<boolean | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkSupportedAuthentication = async () => {
      const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
      const isSupported = types?.length > 0;
      setIsSupportedByDevice(isSupported);
    };

    checkSupportedAuthentication();
  }, []);

  const authenticate = async (
    onSuccess: (result: LocalAuthentication.LocalAuthenticationResult) => void,
    onError: (error: any) => void,
  ) => {
    if (loading) return;

    setLoading(true);
    try {
      const results = await LocalAuthentication.authenticateAsync();
      onSuccess(results);
    } catch (error) {
      onError(error);
    }
    setLoading(false);
  };

  return {isSupportedByDevice, authenticate};
};
