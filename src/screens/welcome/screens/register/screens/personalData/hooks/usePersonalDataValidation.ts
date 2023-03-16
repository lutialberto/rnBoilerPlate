import {TRANSLATION_VALIDATIONS} from '~/constants/Translator';
import {useValidations} from '~/hooks/validations/useValidations';
import {PersonalDataFormInputs} from '../models/PersonalDataFormInputs';

export const usePersonalDataValidations = () => {
  const {
    singleValidations: {IsEmpty},
  } = useValidations();

  const validateForm = (values: PersonalDataFormInputs) => {
    const {address, fullName, gender} = values;

    let errorsFound: any = {};

    if (IsEmpty(address)) errorsFound.address = TRANSLATION_VALIDATIONS.required;

    if (IsEmpty(fullName)) errorsFound.fullName = TRANSLATION_VALIDATIONS.required;

    if (IsEmpty(gender)) errorsFound.gender = TRANSLATION_VALIDATIONS.required;

    return errorsFound;
  };

  return {validateForm};
};
