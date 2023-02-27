import {useValidations} from '~/hooks/validations/useValidations';
import {otpCodeLength} from '../constants/OtpCodeLength';
import {OtpCodeValidationFormInputs} from '../models/OtpCodeValidationFormInputs';

export const useOtpCodeValidationValidations = () => {
  const {IsOtpNumberOk} = useValidations();

  const validateForm = (values: OtpCodeValidationFormInputs) => {
    const {code} = values;

    let errorsFound: any = {};
    const codeWithErrors = IsOtpNumberOk(code, otpCodeLength);
    if (codeWithErrors) errorsFound.code = codeWithErrors;

    return errorsFound;
  };

  return {validateForm};
};
