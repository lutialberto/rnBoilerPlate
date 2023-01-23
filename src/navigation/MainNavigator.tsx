import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from './MainStack';
import {NavigationContainer} from '@react-navigation/native';
import signedInScreens from './stackScreenGroups/signedInScreens';
import {useCheckInternetConnection} from '~/hooks/useCheckInternetConnection';
import NoInternetScreen from '~/screens/noInternet/NoInternetScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  const {isConnected} = useCheckInternetConnection();

  if (!isConnected) return <NoInternetScreen />;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>{signedInScreens()}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
