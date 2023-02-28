import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import ThemeSelector from './components/themeSelector/ThemeSelector';

const translator = TRANSLATION_SCREENS.home.screens.userPreferences;

const UserPreferencesScreen = () => {
  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <ThemeSelector />
    </AppScreenContainer>
  );
};

export default UserPreferencesScreen;
