import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import GenericInput from '~/components/forms/inputs/genericInput/GenericInput';
import {useForm} from '~/hooks/forms/useForm';
import {TRANSLATION_BUTTONS, TRANSLATOR} from '~/constants/Translator';
import {useLoginValidations} from '../../hooks/useLoginValidations';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import {ILoginFormProps} from './ILoginFormProps';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {ColorProps} from '~/hooks/theme/Models';

const translator = TRANSLATOR.components.forms;

const LoginForm = ({onError, onSuccess, handlePasswordRecovery}: ILoginFormProps) => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

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
        label={translator.emailLabel}
        placeholder={translator.emailPlaceholder}
      />
      <GenericInput
        value={values.password}
        onChange={value => handleChange('password', value)}
        errorMessage={errors?.password}
        label={translator.passwordLabel}
        placeholder={translator.passwordPlaceholder}
        type="password"
      />
      <Pressable onPress={handlePasswordRecovery}>
        <PrimaryText text={translator.passwordRecovery} style={styles.passwordRecovery} />
      </Pressable>
      <PrimaryButton onPress={handleSubmit} label={TRANSLATION_BUTTONS.enter} />
    </>
  );
};

export default LoginForm;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    passwordRecovery: {
      fontSize: 14,
      marginBottom: '5%',
      textDecorationLine: 'underline',
      color: colors.primary,
    },
  });
};
