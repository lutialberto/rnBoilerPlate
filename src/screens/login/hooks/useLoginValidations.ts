import {useValidations} from '~/hooks/validations/useValidations';
import {LoginFormInputs} from '../models/LoginFormInputs';

export const useLoginValidations = () => {
  const {IsPasswordOk, IsEmailOk} = useValidations();

  const validateForm = (values: LoginFormInputs) => {
    const {password, email} = values;

    let errorsFound: any = {};
    const passwordWithErrors = IsPasswordOk(password);
    if (passwordWithErrors) errorsFound.password = passwordWithErrors;

    const emailWithErrors = IsEmailOk(email);
    if (emailWithErrors) errorsFound.email = emailWithErrors;

    return errorsFound;
  };

  return {validateForm};
};
