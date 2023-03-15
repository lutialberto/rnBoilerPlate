import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from './MainStack';
import {NavigationContainer} from '@react-navigation/native';
import signedInScreens from './stackScreenGroups/signedInScreens';
import {useCheckInternetConnection} from '~/hooks/useCheckInternetConnection';
import NoInternetScreen from '~/screens/noInternet/NoInternetScreen';
import notSignedInScreens from './stackScreenGroups/notSignedInScreens';
import {useSessionState} from '~/hooks/sessionState/useSessionState';
import SplashScreen from '~/screens/splash/SplashScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  const {isConnected} = useCheckInternetConnection();
  const {isAppReady, isSignedIn, email, restoreSessionFromStorage} = useSessionState();

  useEffect(() => {
    restoreSessionFromStorage(email);
  }, []);

  if (!isAppReady) return <SplashScreen />;

  if (!isConnected) return <NoInternetScreen />;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isSignedIn ? signedInScreens() : notSignedInScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
