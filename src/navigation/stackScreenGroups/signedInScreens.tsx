import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from '../MainStack';
import HomeScreen from '~/screens/home/HomeScreen';
import {ROUTE_BUTTONS, ROUTE_HOME, ROUTE_TEXTS} from '../routes/SignedInRoutes';
import ButtonsScreen from '~/screens/home/screens/buttons/ButtonsScreen';
import TextsScreen from '~/screens/home/screens/texts/TextsScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const signedInScreens = () => (
  <>
    <Stack.Screen name={ROUTE_HOME} component={HomeScreen} />
    <Stack.Screen name={ROUTE_BUTTONS} component={ButtonsScreen} />
    <Stack.Screen name={ROUTE_TEXTS} component={TextsScreen} />
  </>
);

export default signedInScreens;
