import {TRANSLATION_VALIDATIONS} from '~/constants/Translator';
import IsEmpty from '../singleValidations/IsEmpty';
import OnlyNumbers from '../singleValidations/OnlyNumbers';

export default (otp: string, length: number) => {
  if (IsEmpty(otp)) return TRANSLATION_VALIDATIONS.required;
  if (otp.length !== length)
    return TRANSLATION_VALIDATIONS.otpInvalidLength.replace('{length}', length.toString());
  if (OnlyNumbers(otp)) return TRANSLATION_VALIDATIONS.onlyNumbers;
  return;
};
