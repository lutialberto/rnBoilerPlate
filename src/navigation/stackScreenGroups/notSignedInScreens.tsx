import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '~/screens/welcome/screens/login/LoginScreen';
import PasswordRecoveryScreen from '~/screens/welcome/screens/passwordRecovery/PasswordRecoveryScreen';
import ChangePasswordScreen from '~/screens/welcome/screens/passwordRecovery/screens/changePassword/ChangePasswordScreen';
import EmailVerificationScreen from '~/screens/welcome/screens/passwordRecovery/screens/emailVerification/EmailVerificationScreen';
import EmailVerificationRegisterScreen from '~/screens/welcome/screens/register/screens/emailVerification/EmailVerificationRegisterScreen';
import RegisterScreen from '~/screens/welcome/screens/register/RegisterScreen';
import WelcomeScreen from '~/screens/welcome/WelcomeScreen';
import {MainStackParamList} from '../MainStack';
import {
  ROUTE_LOGIN,
  ROUTE_PASSWORD_RECOVERY,
  ROUTE_PASSWORD_RECOVERY_CHANGE_PASSWORD,
  ROUTE_PASSWORD_RECOVERY_EMAIL_VERIFICATION,
  ROUTE_REGISTER,
  ROUTE_REGISTER_CREATE_PASSWORD,
  ROUTE_REGISTER_EMAIL_VERIFICATION,
  ROUTE_REGISTER_PERSONAL_DATA,
  ROUTE_WELCOME,
} from '../routes/NotSignedInRoutes';
import CreatePasswordScreen from '~/screens/welcome/screens/register/screens/createPassword/CreatePasswordScreen';
import PersonalDataScreen from '~/screens/welcome/screens/register/screens/personalData/PersonalDataScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const notSignedInScreens = () => {
  return (
    <>
      <Stack.Screen name={ROUTE_WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={ROUTE_LOGIN} component={LoginScreen} />

      <Stack.Screen name={ROUTE_PASSWORD_RECOVERY} component={PasswordRecoveryScreen} />
      <Stack.Screen
        name={ROUTE_PASSWORD_RECOVERY_EMAIL_VERIFICATION}
        component={EmailVerificationScreen}
      />
      <Stack.Screen
        name={ROUTE_PASSWORD_RECOVERY_CHANGE_PASSWORD}
        component={ChangePasswordScreen}
      />

      <Stack.Screen name={ROUTE_REGISTER} component={RegisterScreen} />
      <Stack.Screen
        name={ROUTE_REGISTER_EMAIL_VERIFICATION}
        component={EmailVerificationRegisterScreen}
      />
      <Stack.Screen name={ROUTE_REGISTER_CREATE_PASSWORD} component={CreatePasswordScreen} />
      <Stack.Screen name={ROUTE_REGISTER_PERSONAL_DATA} component={PersonalDataScreen} />
    </>
  );
};

export default notSignedInScreens;
