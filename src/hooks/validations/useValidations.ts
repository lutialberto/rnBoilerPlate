import {TRANSLATION_VALIDATIONS} from '~/constants/Translator';
import IsEmailOk from './complexValidations/IsEmailOk';
import IsOtpNumberOk from './complexValidations/IsOtpNumberOk';
import IsPasswordOk from './complexValidations/IsPasswordOk';
import HasLowerCase from './singleValidations/HasLowerCase';
import HasNumbers from './singleValidations/HasNumbers';
import HasSpecialCharacter from './singleValidations/HasSpecialCharacter';
import HasUpperCase from './singleValidations/HasUpperCase';
import IsEmail from './singleValidations/IsEmail';
import IsEmpty from './singleValidations/IsEmpty';
import MaxLengthAllowed from './singleValidations/MaxLengthAllowed';
import MinLengthAllowed from './singleValidations/MinLengthAllowed';
import OnlyNumbers from './singleValidations/OnlyNumbers';

export const useValidations = () => {
  return {
    singleValidations: {
      IsEmpty,
      OnlyNumbers,
      HasNumbers,
      HasLowerCase,
      HasUpperCase,
      HasSpecialCharacter,
      IsEmail,
      MinLengthAllowed,
      MaxLengthAllowed,
    },
    IsPasswordOk,
    IsOtpNumberOk,
    IsEmailOk,
  };
};
