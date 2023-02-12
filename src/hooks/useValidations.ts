import {TRANSLATION_VALIDATIONS} from '~/constants/Translator';

export const useValidations = () => {
  const isEmpty = (value: string) => value === '' || value === undefined || value === null;
  const onlyNumbers = (value: string) => !/^\d+$/g.test(value);
  const hasNumbers = (value: string) => /\d/.test(value);
  const hasLowerCase = (value: string) => /[a-z]/.test(value);
  const hasUpperCase = (value: string) => /[A-Z]/.test(value);
  const hasSpecialCharacter = (value: string) => /\W/.test(value);
  const isEmail = (email: string) => /[a-z0-9\.-]+@[a-z]+(\.[a-z]+)+/i.test(email);
  const maxLengthAllowed = (value: string, max: number) => value.length <= max;
  const minLengthAllowed = (value: string, min: number) => value.length >= min;

  const isPasswordOk = (password: string, minLength?: number) => {
    if (isEmpty(password)) return TRANSLATION_VALIDATIONS.required;
    if (!hasNumbers(password)) return TRANSLATION_VALIDATIONS.noNumbers;
    if (!hasLowerCase(password)) return TRANSLATION_VALIDATIONS.noLowerCase;
    if (!hasUpperCase(password)) return TRANSLATION_VALIDATIONS.noUpperCase;
    if (!hasSpecialCharacter(password)) return TRANSLATION_VALIDATIONS.noSpecialCharacter;
    if (minLength && !minLengthAllowed(password, minLength))
      return TRANSLATION_VALIDATIONS.minLength.replace('{min}', minLength.toString());
    return;
  };

  const isOtpNumberOk = (otp: string, length: number) => {
    if (isEmpty(otp)) return TRANSLATION_VALIDATIONS.required;
    if (otp.length !== length)
      return TRANSLATION_VALIDATIONS.otpInvalidLength.replace('{length}', length.toString());
    if (onlyNumbers(otp)) return TRANSLATION_VALIDATIONS.onlyNumbers;
    return;
  };

  const isEmailOk = (email: string) => {
    if (isEmpty(email)) return TRANSLATION_VALIDATIONS.required;
    if (!isEmail(email)) return TRANSLATION_VALIDATIONS.emailInvalid;
    return;
  };

  return {
    singleValidations: {
      isEmpty,
      onlyNumbers,
      hasNumbers,
      hasLowerCase,
      hasUpperCase,
      hasSpecialCharacter,
      isEmail,
      minLengthAllowed,
      maxLengthAllowed,
    },
    isPasswordOk,
    isOtpNumberOk,
    isEmailOk,
  };
};
