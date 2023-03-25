import {StyleSheet} from 'react-native';
import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import TabNavigator from '~/screens/home/screens/tabs/navigation/TabNavigator';

const translator = TRANSLATION_SCREENS.home.screens.tabs;

const TabsScreen = () => {
  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <TabNavigator />
    </AppScreenContainer>
  );
};

export default TabsScreen;

const styles = StyleSheet.create({});
