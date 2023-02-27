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
} from '../routes/SignedInRoutes';
import ButtonsScreen from '~/screens/home/screens/buttons/ButtonsScreen';
import TextsScreen from '~/screens/home/screens/texts/TextsScreen';
import LoadingScreen from '~/screens/home/screens/loading/LoadingScreen';
import ModalsScreen from '~/screens/home/screens/modals/ModalsScreen';
import ToastsScreen from '~/screens/home/screens/toasts/ToastsScreen';
import FormsScreen from '~/screens/home/screens/forms/FormsScreen';
import LoginScreen from '~/screens/home/screens/forms/screens/login/LoginScreen';
import RegisterScreen from '~/screens/home/screens/forms/screens/register/RegisterScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const signedInScreens = () => (
  <>
    <Stack.Screen name={ROUTE_HOME} component={HomeScreen} />
    <Stack.Screen name={ROUTE_BUTTONS} component={ButtonsScreen} />
    <Stack.Screen name={ROUTE_TEXTS} component={TextsScreen} />
    <Stack.Screen name={ROUTE_LOADING} component={LoadingScreen} />
    <Stack.Screen name={ROUTE_MODALS} component={ModalsScreen} />
    <Stack.Screen name={ROUTE_TOASTS} component={ToastsScreen} />

    <Stack.Screen name={ROUTE_FORMS} component={FormsScreen} />
    <Stack.Screen name={ROUTE_FORMS_LOGIN} component={LoginScreen} />
    <Stack.Screen name={ROUTE_FORMS_REGISTER} component={RegisterScreen} />
  </>
);

export default signedInScreens;
