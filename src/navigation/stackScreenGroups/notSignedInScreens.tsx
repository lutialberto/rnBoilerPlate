import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '~/screens/welcome/screens/login/LoginScreen';
import PasswordRecoveryScreen from '~/screens/welcome/screens/passwordRecovery/PasswordRecoveryScreen';
import RegisterScreen from '~/screens/welcome/screens/register/RegisterScreen';
import WelcomeScreen from '~/screens/welcome/WelcomeScreen';
import {MainStackParamList} from '../MainStack';
import {
  ROUTE_LOGIN,
  ROUTE_PASSWORD_RECOVERY,
  ROUTE_REGISTER,
  ROUTE_WELCOME,
} from '../routes/NotSignedInRoutes';

const Stack = createNativeStackNavigator<MainStackParamList>();

const notSignedInScreens = () => {
  return (
    <>
      <Stack.Screen name={ROUTE_WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={ROUTE_LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTE_PASSWORD_RECOVERY} component={PasswordRecoveryScreen} />
      <Stack.Screen name={ROUTE_REGISTER} component={RegisterScreen} />
    </>
  );
};

export default notSignedInScreens;
