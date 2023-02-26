import {TRANSLATION_VALIDATIONS} from '~/constants/Translator';
import {useValidations} from '~/hooks/validations/useValidations';
import {AppFormInputs} from '../models/AppFormInputs';

export const useFormScreenValidations = () => {
  const {
    singleValidations: {IsEmpty},
    IsOtpNumberOk,
    IsPasswordOk,
  } = useValidations();

  const validateForm = (values: AppFormInputs) => {
    const {password, otpCode, firstName, lastName, flag, selectedOption, optionsWithSearch} =
      values;

    let errorsFound: any = {};
    const passwordWithErrors = IsPasswordOk(password);
    if (passwordWithErrors) errorsFound.password = passwordWithErrors;

    if (IsEmpty(firstName)) errorsFound.firstName = TRANSLATION_VALIDATIONS.required;

    if (IsEmpty(lastName)) errorsFound.lastName = TRANSLATION_VALIDATIONS.required;

    if (!flag) errorsFound.flag = TRANSLATION_VALIDATIONS.required;

    if (IsEmpty(selectedOption)) errorsFound.selectedOption = TRANSLATION_VALIDATIONS.required;

    if (IsEmpty(optionsWithSearch))
      errorsFound.optionsWithSearch = TRANSLATION_VALIDATIONS.required;

    const otpWithErrors = IsOtpNumberOk(otpCode, 4);
    if (otpWithErrors) errorsFound.otpCode = otpWithErrors;

    return errorsFound;
  };

  return {validateForm};
};
