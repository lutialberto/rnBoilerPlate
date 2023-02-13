import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import {TRANSLATION_BUTTONS, TRANSLATION_SCREENS} from '~/constants/Translator';
import GenericInput from '~/components/forms/inputs/genericInput/GenericInput';
import {useForm} from '~/hooks/useForm';
import {useFormScreenValidations} from './hooks/useFormScreenValidations';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import BooleanInput from '~/components/forms/inputs/booleanInput/BooleanInput';

const translator = TRANSLATION_SCREENS.home.screens.forms;

const FormsScreen = () => {
  const {validateForm} = useFormScreenValidations();
  const {errors, handleChange, handleSubmit, values} = useForm({
    defaultValues: {
      password: '',
      firstName: '',
      lastName: '',
      flag: false,
      selectedOption: '',
      optionsWithSearch: '',
      otpCode: '',
    },
    validateForm,
    onSuccess: values => console.log('success', {values}),
    onError: (values, errors) => console.log('error', {values, errors}),
  });

  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <GenericInput
        value={values.password}
        onChange={value => handleChange('password', value)}
        errorMessage={errors.password}
        label={translator.form.passwordLabel}
        placeholder={translator.form.passwordPlaceholder}
        type="password"
      />
      <GenericInput
        value={values.firstName}
        onChange={value => handleChange('firstName', value)}
        errorMessage={errors.firstName}
        label={translator.form.firstNameLabel}
        placeholder={translator.form.firstNamePlaceholder}
      />
      <GenericInput
        value={values.lastName}
        onChange={value => handleChange('lastName', value)}
        errorMessage={errors.lastName}
        label={translator.form.lastNameLabel}
        placeholder={translator.form.lastNamePlaceholder}
      />
      <BooleanInput
        value={values.flag}
        onChange={value => handleChange('flag', value)}
        errorMessage={errors.flag}
        label={translator.form.flagLabel}
      />
      <PrimaryButton onPress={handleSubmit} label={TRANSLATION_BUTTONS.save} />
    </AppScreenContainer>
  );
};

export default FormsScreen;

const styles = StyleSheet.create({});
