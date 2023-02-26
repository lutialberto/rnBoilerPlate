import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import LoginForm from './components/loginForm/LoginForm';
import {LoginFormInputs} from './models/LoginFormInputs';
import {IFormErrors} from '~/hooks/forms/Models';

const translator = TRANSLATION_SCREENS.home.screens.forms.forms.login;

const LoginScreen = () => {
  const onSuccess = (values: LoginFormInputs) => console.log('success', {values});
  const onError = (values: LoginFormInputs, errors: IFormErrors<LoginFormInputs>) =>
    console.log('error', {values, errors});

  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <LoginForm onSuccess={onSuccess} onError={onError} />
    </AppScreenContainer>
  );
};

export default LoginScreen;
