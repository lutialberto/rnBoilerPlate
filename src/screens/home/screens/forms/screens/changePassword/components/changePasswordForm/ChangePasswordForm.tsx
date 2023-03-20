import React, {useRef} from 'react';
import {StyleSheet, TextInput} from 'react-native';
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
  const passwordConfirmRef = useRef<TextInput>(null);
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
      <PrimaryButton
        onPress={handleSubmit}
        label={translator.confirm}
        containerStyle={styles.button}
      />
    </>
  );
};

export default ChangePasswordForm;

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
  },
});
