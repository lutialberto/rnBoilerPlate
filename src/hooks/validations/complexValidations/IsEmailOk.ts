import {TRANSLATION_VALIDATIONS} from '~/constants/Translator';
import IsEmail from '../singleValidations/IsEmail';
import IsEmpty from '../singleValidations/IsEmpty';

export default (email: string) => {
  if (IsEmpty(email)) return TRANSLATION_VALIDATIONS.required;
  if (!IsEmail(email)) return TRANSLATION_VALIDATIONS.emailInvalid;
  return;
};
