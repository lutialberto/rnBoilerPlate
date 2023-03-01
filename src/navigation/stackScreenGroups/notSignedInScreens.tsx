import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from '~/screens/welcome/WelcomeScreen';
import {MainStackParamList} from '../MainStack';
import {ROUTE_WELCOME} from '../routes/NotSignedInRoutes';

const Stack = createNativeStackNavigator<MainStackParamList>();

const notSignedInScreens = () => {
  return (
    <>
      <Stack.Screen name={ROUTE_WELCOME} component={WelcomeScreen} />
    </>
  );
};

export default notSignedInScreens;
