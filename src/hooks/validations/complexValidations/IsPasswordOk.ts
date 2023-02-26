import {TRANSLATION_VALIDATIONS} from '~/constants/Translator';
import HasLowerCase from '../singleValidations/HasLowerCase';
import HasNumbers from '../singleValidations/HasNumbers';
import HasSpecialCharacter from '../singleValidations/HasSpecialCharacter';
import HasUpperCase from '../singleValidations/HasUpperCase';
import IsEmpty from '../singleValidations/IsEmpty';
import MinLengthAllowed from '../singleValidations/MinLengthAllowed';

export default (password: string, minLength?: number) => {
  if (IsEmpty(password)) return TRANSLATION_VALIDATIONS.required;
  if (!HasNumbers(password)) return TRANSLATION_VALIDATIONS.onlyNumbers;
  if (!HasLowerCase(password)) return TRANSLATION_VALIDATIONS.noLowerCase;
  if (!HasUpperCase(password)) return TRANSLATION_VALIDATIONS.noUpperCase;
  if (!HasSpecialCharacter(password)) return TRANSLATION_VALIDATIONS.noSpecialCharacter;
  if (minLength && !MinLengthAllowed(password, minLength))
    return TRANSLATION_VALIDATIONS.minLength.replace('{min}', minLength.toString());
  return;
};
