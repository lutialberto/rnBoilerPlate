import React from 'react';
import {IFormProps} from '~/models/IFormProps';
import {RegisterFormInputs} from '../../models/RegisterFormInputs';
import GenericInput from '~/components/forms/inputs/genericInput/GenericInput';
import {useRegisterValidations} from '../../hooks/useRegisterValidations';
import {useForm} from '~/hooks/forms/useForm';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import {TRANSLATION_SCREENS, TRANSLATOR} from '~/constants/Translator';

const translator = TRANSLATION_SCREENS.home.screens.forms.forms.register;
const translatorForm = TRANSLATOR.components.forms;

const RegisterForm = ({onSuccess, onError}: IFormProps<RegisterFormInputs>) => {
  const {validateForm} = useRegisterValidations();
  const {errors, handleChange, handleSubmit, values} = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validateForm,
    onSuccess,
    onError,
  });

  return (
    <>
      <GenericInput
        value={values.fullName}
        onChange={value => handleChange('fullName', value)}
        errorMessage={errors?.fullName}
        label={translator.form.fullNameLabel}
        placeholder={translator.form.fullNamePlaceholder}
      />
      <GenericInput
        value={values.email}
        onChange={value => handleChange('email', value)}
        errorMessage={errors?.email}
        label={translatorForm.emailLabel}
        placeholder={translatorForm.emailPlaceholder}
      />
      <GenericInput
        value={values.password}
        onChange={value => handleChange('password', value)}
        errorMessage={errors?.password}
        label={translatorForm.passwordLabel}
        placeholder={translatorForm.passwordPlaceholder}
        type="password"
      />
      <GenericInput
        value={values.passwordConfirm}
        onChange={value => handleChange('passwordConfirm', value)}
        errorMessage={errors?.passwordConfirm}
        label={translatorForm.passwordConfirmLabel}
        placeholder={translatorForm.passwordConfirmPlaceholder}
        type="password"
      />
      <PrimaryButton onPress={handleSubmit} label={translator.form.submit} />
    </>
  );
};

export default RegisterForm;
