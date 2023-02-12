import {TRANSLATION_VALIDATIONS} from '~/constants/Translator';
import {useValidations} from '~/hooks/useValidations';
import {AppFormInputs} from '../models/AppFormInputs';

export const useFormScreenValidations = () => {
  const {
    singleValidations: {isEmpty},
    isOtpNumberOk,
    isPasswordOk,
  } = useValidations();

  const validateForm = (values: AppFormInputs) => {
    const {password, otpCode, firstName, lastName, flag, selectedOption} = values;

    let errorsFound: any = {};
    const passwordWithErrors = isPasswordOk(password);
    if (passwordWithErrors) errorsFound.password = passwordWithErrors;

    if (isEmpty(firstName)) errorsFound.firstName = TRANSLATION_VALIDATIONS.required;

    if (isEmpty(lastName)) errorsFound.lastName = TRANSLATION_VALIDATIONS.required;

    if (!flag) errorsFound.flag = TRANSLATION_VALIDATIONS.required;

    if (isEmpty(selectedOption)) errorsFound.lastName = TRANSLATION_VALIDATIONS.required;

    const otpWithErrors = isOtpNumberOk(otpCode, 4);
    if (otpWithErrors) errorsFound.otpCode = otpWithErrors;

    return errorsFound;
  };

  return {validateForm};
};
