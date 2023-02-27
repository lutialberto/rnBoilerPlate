import React from 'react';
import {IFormProps} from '~/models/IFormProps';
import {ChangePasswordFormInputs} from '../../models/ChangePasswordFormInputs';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import GenericInput from '~/components/forms/inputs/genericInput/GenericInput';
import {useChangePasswordValidations} from '../../hooks/useChangePasswordValidations';
import {useForm} from '~/hooks/forms/useForm';
import {TRANSLATION_BUTTONS, TRANSLATOR} from '~/constants/Translator';

const translator = TRANSLATION_BUTTONS;
const translatorForm = TRANSLATOR.components.forms;

const ChangePasswordForm = ({onError, onSuccess}: IFormProps<ChangePasswordFormInputs>) => {
  const {validateForm} = useChangePasswordValidations();
  const {errors, handleChange, handleSubmit, values} = useForm({
    defaultValues: {
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
      <PrimaryButton onPress={handleSubmit} label={translator.confirm} />
    </>
  );
};

export default ChangePasswordForm;
