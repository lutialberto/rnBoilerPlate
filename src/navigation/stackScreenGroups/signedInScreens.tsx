import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from '../MainStack';
import HomeScreen from '~/screens/home/HomeScreen';
import {
  ROUTE_BUTTONS,
  ROUTE_FORMS,
  ROUTE_HOME,
  ROUTE_FORMS_LOGIN,
  ROUTE_LOADING,
  ROUTE_MODALS,
  ROUTE_TEXTS,
  ROUTE_TOASTS,
  ROUTE_FORMS_REGISTER,
  ROUTE_FORMS_CHANGE_PASSWORD,
  ROUTE_FORMS_OTP_CODE_VALIDATION,
  ROUTE_ABOUT,
  ROUTE_USER_PREFERENCES,
  ROUTE_LISTS,
  ROUTE_MENU,
  ROUTE_SLIDERS,
  ROUTE_BIOMETRIC_AUTH,
  ROUTE_TABS,
} from '../routes/SignedInRoutes';
import ButtonsScreen from '~/screens/home/screens/buttons/ButtonsScreen';
import TextsScreen from '~/screens/home/screens/texts/TextsScreen';
import LoadingScreen from '~/screens/home/screens/loading/LoadingScreen';
import ModalsScreen from '~/screens/home/screens/modals/ModalsScreen';
import ToastsScreen from '~/screens/home/screens/toasts/ToastsScreen';
import FormsScreen from '~/screens/home/screens/forms/FormsScreen';
import LoginScreen from '~/screens/home/screens/forms/screens/login/LoginScreen';
import RegisterScreen from '~/screens/home/screens/forms/screens/register/RegisterScreen';
import ChangePasswordScreen from '~/screens/home/screens/forms/screens/changePassword/ChangePasswordScreen';
import OtpCodeValidationScreen from '~/screens/home/screens/forms/screens/otpCodeValidation/OtpCodeValidationScreen';
import AboutScreen from '~/screens/home/screens/about/AboutScreen';
import UserPreferencesScreen from '~/screens/home/screens/userPreferences/UserPreferencesScreen';
import ListsScreen from '~/screens/home/screens/lists/ListsScreen';
import MenuScreen from '~/screens/home/screens/menu/MenuScreen';
import SlidersScreen from '~/screens/home/screens/sliders/SlidersScreen';
import BiometricAuthScreen from '~/screens/home/screens/biometricAuth/BiometricAuthScreen';
import TabsScreen from '~/screens/home/screens/tabs/TabsScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const signedInScreens = () => (
  <>
    <Stack.Screen name={ROUTE_HOME} component={HomeScreen} />
    <Stack.Screen name={ROUTE_BUTTONS} component={ButtonsScreen} />
    <Stack.Screen name={ROUTE_TEXTS} component={TextsScreen} />
    <Stack.Screen name={ROUTE_LOADING} component={LoadingScreen} />
    <Stack.Screen name={ROUTE_MODALS} component={ModalsScreen} />
    <Stack.Screen name={ROUTE_TOASTS} component={ToastsScreen} />
    <Stack.Screen name={ROUTE_ABOUT} component={AboutScreen} />
    <Stack.Screen name={ROUTE_USER_PREFERENCES} component={UserPreferencesScreen} />
    <Stack.Screen name={ROUTE_LISTS} component={ListsScreen} />
    <Stack.Screen name={ROUTE_MENU} component={MenuScreen} />
    <Stack.Screen name={ROUTE_SLIDERS} component={SlidersScreen} />
    <Stack.Screen name={ROUTE_BIOMETRIC_AUTH} component={BiometricAuthScreen} />
    <Stack.Screen name={ROUTE_TABS} component={TabsScreen} />

    <Stack.Screen name={ROUTE_FORMS} component={FormsScreen} />
    <Stack.Screen name={ROUTE_FORMS_LOGIN} component={LoginScreen} />
    <Stack.Screen name={ROUTE_FORMS_REGISTER} component={RegisterScreen} />
    <Stack.Screen name={ROUTE_FORMS_CHANGE_PASSWORD} component={ChangePasswordScreen} />
    <Stack.Screen name={ROUTE_FORMS_OTP_CODE_VALIDATION} component={OtpCodeValidationScreen} />
  </>
);

export default signedInScreens;
