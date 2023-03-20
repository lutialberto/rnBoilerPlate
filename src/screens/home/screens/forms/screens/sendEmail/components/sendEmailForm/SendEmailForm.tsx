import {StyleSheet} from 'react-native';
import React from 'react';
import {SendEmailFormInputs} from '../../models/SendEmailFormInputs';
import {IFormProps} from '~/models/IFormProps';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import GenericInput from '~/components/forms/inputs/genericInput/GenericInput';
import {useForm} from '~/hooks/forms/useForm';
import {TRANSLATION_BUTTONS, TRANSLATOR} from '~/constants/Translator';
import {useSendEmailValidations} from '../../hooks/useSendEmailValidations';

const translatorForm = TRANSLATOR.components.forms;

const SendEmailForm = ({onSuccess, onError}: IFormProps<SendEmailFormInputs>) => {
  const {validateForm} = useSendEmailValidations();
  const {errors, handleChange, handleSubmit, values} = useForm({
    defaultValues: {
      email: '',
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
        label={translatorForm.emailLabel}
        placeholder={translatorForm.emailPlaceholder}
        onSubmit={handleSubmit}
      />
      <PrimaryButton
        onPress={handleSubmit}
        label={TRANSLATION_BUTTONS.next}
        containerStyle={styles.button}
      />
    </>
  );
};

export default SendEmailForm;

const styles = StyleSheet.create({
  button: {
    marginTop: '5%',
  },
});
