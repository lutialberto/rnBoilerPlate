import {StyleSheet, TextInput} from 'react-native';
import React, {useRef} from 'react';
import {IFormProps} from '~/models/IFormProps';
import {PersonalDataFormInputs} from '../../models/PersonalDataFormInputs';
import {usePersonalDataValidations} from '../../hooks/usePersonalDataValidation';
import {useForm} from '~/hooks/forms/useForm';
import GenericInput from '~/components/forms/inputs/genericInput/GenericInput';
import {TRANSLATION_BUTTONS, TRANSLATION_SCREENS} from '~/constants/Translator';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import SelectInput from '~/components/forms/inputs/selectInput/SelectInput';

const translatorButtons = TRANSLATION_BUTTONS;
const translator = TRANSLATION_SCREENS.welcome.screens.register.screens.personalData.form;

const PersonalDataForm = ({onError, onSuccess}: IFormProps<PersonalDataFormInputs>) => {
  const addressRef = useRef<TextInput>(null);
  const {validateForm} = usePersonalDataValidations();
  const {errors, handleChange, handleSubmit, values} = useForm({
    defaultValues: {
      fullName: '',
      address: '',
      gender: '',
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
        label={translator.fullNameLabel}
        placeholder={translator.fullNamePlaceholder}
        onSubmit={() => addressRef.current?.focus()}
      />
      <GenericInput
        value={values.address}
        onChange={value => handleChange('address', value)}
        errorMessage={errors?.address}
        label={translator.addressLabel}
        placeholder={translator.addressPlaceholder}
        ref={addressRef}
      />
      <SelectInput
        value={values.gender}
        onChange={value => handleChange('gender', value)}
        errorMessage={errors?.gender}
        label={translator.genderLabel}
        options={[
          {label: 'Masculino', value: 'M'},
          {label: 'Femenino', value: 'F'},
        ]}
      />
      <PrimaryButton
        onPress={handleSubmit}
        label={translatorButtons.confirm}
        containerStyle={styles.button}
      />
    </>
  );
};

export default PersonalDataForm;

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
  },
});
