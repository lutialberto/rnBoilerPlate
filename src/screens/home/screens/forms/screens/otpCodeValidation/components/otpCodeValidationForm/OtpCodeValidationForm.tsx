import React from 'react';
import {IFormProps} from '~/models/IFormProps';
import {OtpCodeValidationFormInputs} from '../../models/OtpCodeValidationFormInputs';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import {useOtpCodeValidationValidations} from '../../hooks/useOtpCodeValidationValidations';
import {useForm} from '~/hooks/forms/useForm';
import CodeInput from '~/components/forms/inputs/codeInput/CodeInput';
import {otpCodeLength} from '../../constants/OtpCodeLength';
import {TRANSLATION_BUTTONS} from '~/constants/Translator';

const OtpCodeValidationForm = ({onError, onSuccess}: IFormProps<OtpCodeValidationFormInputs>) => {
  const {validateForm} = useOtpCodeValidationValidations();
  const {errors, handleChange, handleSubmit, values} = useForm({
    defaultValues: {
      code: '',
    },
    validateForm,
    onSuccess,
    onError,
  });

  return (
    <>
      <CodeInput
        value={values.code}
        onChange={value => handleChange('code', value)}
        errorMessage={errors?.code}
        length={otpCodeLength}
      />
      <PrimaryButton onPress={handleSubmit} label={TRANSLATION_BUTTONS.validate} />
    </>
  );
};

export default OtpCodeValidationForm;
