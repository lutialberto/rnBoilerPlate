import {StyleSheet} from 'react-native';
import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import RegisterForm from './components/registerForm/RegisterForm';
import {IFormErrors} from '~/hooks/forms/Models';
import {RegisterFormInputs} from './models/RegisterFormInputs';

const translator = TRANSLATION_SCREENS.home.screens.forms.forms.register;

const RegisterScreen = () => {
  const onSuccess = (values: RegisterFormInputs) => console.log('success', {values});
  const onError = (values: RegisterFormInputs, errors: IFormErrors<RegisterFormInputs>) =>
    console.log('error', {values, errors});

  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <RegisterForm onSuccess={onSuccess} onError={onError} />
    </AppScreenContainer>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
