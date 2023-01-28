import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from '../MainStack';
import HomeScreen from '~/screens/home/HomeScreen';
import {ROUTE_BUTTONS, ROUTE_HOME} from '../routes/SignedInRoutes';
import ButtonsScreen from '~/screens/home/screens/buttons/ButtonsScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const signedInScreens = () => (
  <>
    <Stack.Screen name={ROUTE_HOME} component={HomeScreen} />
    <Stack.Screen name={ROUTE_BUTTONS} component={ButtonsScreen} />
  </>
);

export default signedInScreens;
