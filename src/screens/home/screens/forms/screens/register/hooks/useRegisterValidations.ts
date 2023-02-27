import {TRANSLATION_VALIDATIONS} from '~/constants/Translator';
import {useValidations} from '~/hooks/validations/useValidations';
import {RegisterFormInputs} from '../models/RegisterFormInputs';

export const useRegisterValidations = () => {
  const {
    IsPasswordOk,
    IsEmailOk,
    singleValidations: {IsEmpty},
  } = useValidations();

  const validateForm = (values: RegisterFormInputs) => {
    const {email, fullName, password, passwordConfirm} = values;

    let errorsFound: any = {};

    if (IsEmpty(fullName)) errorsFound.fullName = TRANSLATION_VALIDATIONS.required;

    const emailWithErrors = IsEmailOk(email);
    if (emailWithErrors) errorsFound.email = emailWithErrors;

    const passwordWithErrors = IsPasswordOk(password);
    if (passwordWithErrors) errorsFound.password = passwordWithErrors;

    if (IsEmpty(passwordConfirm)) errorsFound.passwordConfirm = TRANSLATION_VALIDATIONS.required;

    if (password !== passwordConfirm)
      errorsFound.password = TRANSLATION_VALIDATIONS.passwordNotConfirmed;

    return errorsFound;
  };

  return {validateForm};
};
