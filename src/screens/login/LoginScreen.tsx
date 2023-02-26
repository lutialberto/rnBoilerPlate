import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import LoginForm from './components/loginForm/LoginForm';

const translator = TRANSLATION_SCREENS.home.screens.login;

const LoginScreen = () => {
  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <LoginForm />
    </AppScreenContainer>
  );
};

export default LoginScreen;
