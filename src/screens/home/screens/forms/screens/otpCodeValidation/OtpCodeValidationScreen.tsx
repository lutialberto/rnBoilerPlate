import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import OtpCodeValidationForm from './components/otpCodeValidationForm/OtpCodeValidationForm';
import {OtpCodeValidationFormInputs} from './models/OtpCodeValidationFormInputs';
import {IFormErrors} from '~/hooks/forms/Models';

const translator = TRANSLATION_SCREENS.home.screens.forms.forms.otpCodeValidation;

const OtpCodeValidationScreen = () => {
  const onSuccess = (values: OtpCodeValidationFormInputs) => console.log('success', {values});
  const onError = (
    values: OtpCodeValidationFormInputs,
    errors: IFormErrors<OtpCodeValidationFormInputs>,
  ) => console.log('error', {values, errors});

  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <OtpCodeValidationForm onSuccess={onSuccess} onError={onError} />
    </AppScreenContainer>
  );
};

export default OtpCodeValidationScreen;
