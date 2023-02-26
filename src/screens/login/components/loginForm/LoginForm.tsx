import React from 'react';
import GenericInput from '~/components/forms/inputs/genericInput/GenericInput';
import {useForm} from '~/hooks/forms/useForm';
import {TRANSLATION_BUTTONS, TRANSLATOR} from '~/constants/Translator';
import {useLoginValidations} from '../../hooks/useLoginValidations';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import {ILoginFormProps} from './ILoginFormProps';

const translator = TRANSLATOR.components.forms.login;

const LoginForm = ({onError, onSuccess}: ILoginFormProps) => {
  const {validateForm} = useLoginValidations();
  const {errors, handleChange, handleSubmit, values} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validateForm,
    onSuccess,
    onError,
  });

  return (
    <>
      <GenericInput
        value={values.email}
        onChange={value => handleChange('email', value)}
        errorMessage={errors?.email}
        label={translator.passwordLabel}
        placeholder={translator.passwordPlaceholder}
      />
      <GenericInput
        value={values.password}
        onChange={value => handleChange('password', value)}
        errorMessage={errors?.password}
        label={translator.passwordLabel}
        placeholder={translator.passwordPlaceholder}
        type="password"
      />
      <PrimaryButton onPress={handleSubmit} label={TRANSLATION_BUTTONS.enter} />
    </>
  );
};

export default LoginForm;
