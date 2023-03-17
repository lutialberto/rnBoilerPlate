import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import {TRANSLATION_BUTTONS, TRANSLATION_SCREENS} from '~/constants/Translator';
import GenericInput from '~/components/forms/inputs/genericInput/GenericInput';
import {useFormScreenValidations} from './hooks/useFormScreenValidations';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import BooleanInput from '~/components/forms/inputs/booleanInput/BooleanInput';
import {useForm} from '~/hooks/forms/useForm';
import SelectInput from '~/components/forms/inputs/selectInput/SelectInput';
import CodeInput from '~/components/forms/inputs/codeInput/CodeInput';
import {
  ROUTE_FORMS_CHANGE_PASSWORD,
  ROUTE_FORMS_LOGIN,
  ROUTE_FORMS_OTP_CODE_VALIDATION,
  ROUTE_FORMS_REGISTER,
} from '~/navigation/routes/SignedInRoutes';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationType} from '~/navigation/MainStack';
import {ScrollView, StyleSheet, View} from 'react-native';
import FileUploadInput from '~/components/forms/inputs/fileUploadInput/FileUploadInput';
import {useFileUpload} from '~/hooks/fileUpload/useFileUpload';

const translator = TRANSLATION_SCREENS.home.screens.forms;

const FormsScreen = () => {
  const navigator = useNavigation<MainScreenNavigationType>();
  const {uploadSingleFile} = useFileUpload();
  const {validateForm} = useFormScreenValidations();
  const {errors, handleChange, handleSubmit, values} = useForm({
    defaultValues: {
      password: '',
      firstName: '',
      flag: false,
      selectedOption: '',
      optionsWithSearch: '',
      otpCode: '',
      picture: {
        data: '',
        name: '',
        size: 0,
        type: '',
      },
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
        errorMessage={errors?.password}
        label={translator.form.passwordLabel}
        placeholder={translator.form.passwordPlaceholder}
        type="password"
      />
      <GenericInput
        value={values.firstName}
        onChange={value => handleChange('firstName', value)}
        errorMessage={errors?.firstName}
        label={translator.form.firstNameLabel}
        placeholder={translator.form.firstNamePlaceholder}
      />
      <BooleanInput
        value={values.flag}
        onChange={value => handleChange('flag', value)}
        errorMessage={errors?.flag}
        label={translator.form.flagLabel}
      />
      <SelectInput
        value={values.selectedOption}
        onChange={value => handleChange('selectedOption', value)}
        errorMessage={errors?.selectedOption}
        label={translator.form.optionsLabel}
        options={[
          {label: '1', value: '1'},
          {label: '2', value: '2'},
          {label: '3', value: '3'},
        ]}
      />
      <SelectInput
        value={values.optionsWithSearch}
        onChange={value => handleChange('optionsWithSearch', value)}
        errorMessage={errors?.optionsWithSearch}
        label={translator.form.optionsWithSearchLabel}
        options={[
          {label: 'dsadsadsa', value: '1'},
          {label: 'sdsadmsaldsam', value: '2'},
          {label: 'dsakdlñwkqop', value: '3'},
        ]}
        enableSearchBar
      />
      <CodeInput
        value={values.otpCode}
        onChange={value => handleChange('otpCode', value)}
        errorMessage={errors?.otpCode}
        length={4}
      />
      <FileUploadInput
        handlePickDocument={async () => {
          const file = await uploadSingleFile();
          handleChange('picture', file);
        }}
        onChange={value => handleChange('picture', value)}
        value={values.picture}
        errorMessage={errors?.picture}
        label={translator.form.pictureLabel}
        placeholder={translator.form.picturePlaceholder}
      />
      <PrimaryButton onPress={handleSubmit} label={TRANSLATION_BUTTONS.save} />
      <ScrollView contentContainerStyle={styles.container}>
        <PrimaryButton
          onPress={() => navigator.navigate(ROUTE_FORMS_LOGIN)}
          label={translator.forms.login.goToLabel}
          containerStyle={styles.button}
        />
        <PrimaryButton
          onPress={() => navigator.navigate(ROUTE_FORMS_REGISTER)}
          label={translator.forms.register.goToLabel}
          containerStyle={styles.button}
        />
        <PrimaryButton
          onPress={() => navigator.navigate(ROUTE_FORMS_CHANGE_PASSWORD)}
          label={translator.forms.changePassword.goToLabel}
          containerStyle={styles.button}
        />
        <PrimaryButton
          onPress={() => navigator.navigate(ROUTE_FORMS_OTP_CODE_VALIDATION)}
          label={translator.forms.otpCodeValidation.goToLabel}
          containerStyle={styles.button}
        />
      </ScrollView>
    </AppScreenContainer>
  );
};

export default FormsScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  button: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
