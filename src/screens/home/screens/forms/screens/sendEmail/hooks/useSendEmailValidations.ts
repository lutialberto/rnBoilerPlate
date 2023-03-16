import {useValidations} from '~/hooks/validations/useValidations';
import {SendEmailFormInputs} from '../models/SendEmailFormInputs';

export const useSendEmailValidations = () => {
  const {IsEmailOk} = useValidations();

  const validateForm = (values: SendEmailFormInputs) => {
    const {email} = values;

    let errorsFound: any = {};

    const emailWithErrors = IsEmailOk(email);
    if (emailWithErrors) errorsFound.email = emailWithErrors;

    return errorsFound;
  };

  return {validateForm};
};
