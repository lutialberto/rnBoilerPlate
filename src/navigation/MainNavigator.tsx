import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from './MainStack';
import {NavigationContainer} from '@react-navigation/native';
import signedInScreens from './stackScreenGroups/signedInScreens';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>{signedInScreens()}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
