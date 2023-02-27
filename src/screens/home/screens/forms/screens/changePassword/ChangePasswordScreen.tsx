import {StyleSheet} from 'react-native';
import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import {ChangePasswordFormInputs} from './models/ChangePasswordFormInputs';
import {IFormErrors} from '~/hooks/forms/Models';
import ChangePasswordForm from './components/changePasswordForm/ChangePasswordForm';

const translator = TRANSLATION_SCREENS.home.screens.forms.forms.changePassword;

const ChangePasswordScreen = () => {
  const onSuccess = (values: ChangePasswordFormInputs) => console.log('success', {values});
  const onError = (
    values: ChangePasswordFormInputs,
    errors: IFormErrors<ChangePasswordFormInputs>,
  ) => console.log('error', {values, errors});

  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <ChangePasswordForm onSuccess={onSuccess} onError={onError} />
    </AppScreenContainer>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({});
