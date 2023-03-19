import {TRANSLATION_VALIDATIONS} from '~/constants/Translator';
import {useValidations} from '~/hooks/validations/useValidations';
import {ContactUsFormInputs} from '../models/ContactUsFormInputs';

export const useContactUsValidations = () => {
  const {
    singleValidations: {IsEmpty},
    IsEmailOk,
  } = useValidations();

  const validateForm = (values: ContactUsFormInputs) => {
    const {email, comment} = values;

    let errorsFound: any = {};
    const emailWithErrors = IsEmailOk(email);
    if (emailWithErrors) errorsFound.email = emailWithErrors;

    if (IsEmpty(comment)) errorsFound.comment = TRANSLATION_VALIDATIONS.required;

    return errorsFound;
  };

  return {validateForm};
};
