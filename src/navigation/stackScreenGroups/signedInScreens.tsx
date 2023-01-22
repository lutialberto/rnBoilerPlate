import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from '../MainStack';
import HomeScreen from '~/screens/home/HomeScreen';
import {ROUTE_HOME} from '../routes/SignedInRoutes';

const Stack = createNativeStackNavigator<MainStackParamList>();

const signedInScreens = () => (
  <>
    <Stack.Screen name={ROUTE_HOME} component={HomeScreen} />
  </>
);

export default signedInScreens;
