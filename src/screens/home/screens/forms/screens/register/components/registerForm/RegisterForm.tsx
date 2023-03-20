import React, {useRef} from 'react';
import {IFormProps} from '~/models/IFormProps';
import {RegisterFormInputs} from '../../models/RegisterFormInputs';
import GenericInput from '~/components/forms/inputs/genericInput/GenericInput';
import {useRegisterValidations} from '../../hooks/useRegisterValidations';
import {useForm} from '~/hooks/forms/useForm';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import {TRANSLATION_SCREENS, TRANSLATOR} from '~/constants/Translator';
import {TextInput} from 'react-native/types';

const translator = TRANSLATION_SCREENS.home.screens.forms.forms.register;
const translatorForm = TRANSLATOR.components.forms;

const RegisterForm = ({onSuccess, onError}: IFormProps<RegisterFormInputs>) => {
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const passwordConfirmRef = useRef<TextInput>(null);
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
        onSubmit={() => emailRef.current?.focus()}
      />
      <GenericInput
        value={values.email}
        onChange={value => handleChange('email', value)}
        errorMessage={errors?.email}
        label={translatorForm.emailLabel}
        placeholder={translatorForm.emailPlaceholder}
        ref={emailRef}
        onSubmit={() => passwordRef.current?.focus()}
      />
      <GenericInput
        value={values.password}
        onChange={value => handleChange('password', value)}
        errorMessage={errors?.password}
        label={translatorForm.passwordLabel}
        placeholder={translatorForm.passwordPlaceholder}
        type="password"
        ref={passwordRef}
        onSubmit={() => passwordConfirmRef.current?.focus()}
      />
      <GenericInput
        value={values.passwordConfirm}
        onChange={value => handleChange('passwordConfirm', value)}
        errorMessage={errors?.passwordConfirm}
        label={translatorForm.passwordConfirmLabel}
        placeholder={translatorForm.passwordConfirmPlaceholder}
        type="password"
        ref={passwordConfirmRef}
        onSubmit={handleSubmit}
      />
      <PrimaryButton onPress={handleSubmit} label={translator.form.submit} />
    </>
  );
};

export default RegisterForm;
