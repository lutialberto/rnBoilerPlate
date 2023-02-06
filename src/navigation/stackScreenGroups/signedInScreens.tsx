import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from '../MainStack';
import HomeScreen from '~/screens/home/HomeScreen';
import {ROUTE_BUTTONS, ROUTE_HOME, ROUTE_LOADING, ROUTE_TEXTS} from '../routes/SignedInRoutes';
import ButtonsScreen from '~/screens/home/screens/buttons/ButtonsScreen';
import TextsScreen from '~/screens/home/screens/texts/TextsScreen';
import LoadingScreen from '~/screens/home/screens/loading/LoadingScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const signedInScreens = () => (
  <>
    <Stack.Screen name={ROUTE_HOME} component={HomeScreen} />
    <Stack.Screen name={ROUTE_BUTTONS} component={ButtonsScreen} />
    <Stack.Screen name={ROUTE_TEXTS} component={TextsScreen} />
    <Stack.Screen name={ROUTE_LOADING} component={LoadingScreen} />
  </>
);

export default signedInScreens;
