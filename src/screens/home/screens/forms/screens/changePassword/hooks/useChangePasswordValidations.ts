import {TRANSLATION_VALIDATIONS} from '~/constants/Translator';
import {useValidations} from '~/hooks/validations/useValidations';
import {ChangePasswordFormInputs} from '../models/ChangePasswordFormInputs';

export const useChangePasswordValidations = () => {
  const {
    IsPasswordOk,
    singleValidations: {IsEmpty},
  } = useValidations();

  const validateForm = (values: ChangePasswordFormInputs) => {
    const {password, passwordConfirm} = values;

    let errorsFound: any = {};

    const passwordWithErrors = IsPasswordOk(password);
    if (passwordWithErrors) errorsFound.password = passwordWithErrors;

    if (IsEmpty(passwordConfirm)) errorsFound.passwordConfirm = TRANSLATION_VALIDATIONS.required;

    if (password !== passwordConfirm)
      errorsFound.password = TRANSLATION_VALIDATIONS.passwordNotConfirmed;

    return errorsFound;
  };

  return {validateForm};
};
