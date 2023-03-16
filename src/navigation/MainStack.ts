import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IChangePasswordScreenProps} from '~/screens/welcome/screens/passwordRecovery/screens/changePassword/IChangePasswordScreenProps';
import {IEmailVerificationScreenProps as EmailVerificationPassword} from '~/screens/welcome/screens/passwordRecovery/screens/emailVerification/IEmailVerificationScreenProps';
import {IEmailVerificationScreenProps as EmailVerificationRegister} from '~/screens/welcome/screens/register/screens/emailVerification/IEmailVerificationScreenProps';

export type MainStackParamList = {
  Welcome: undefined;
  Login: undefined;

  PasswordRecovery: undefined;
  'PasswordRecovery/EmailVerification': EmailVerificationPassword;
  'PasswordRecovery/ChangePassword': IChangePasswordScreenProps;

  Register: undefined;
  'Register/EmailVerification': EmailVerificationRegister;
  'Register/CreatePassword': undefined;
  'Register/PersonalData': undefined;

  Home: undefined;
  Buttons: undefined;
  Texts: undefined;
  Loading: undefined;
  Modals: undefined;
  Toasts: undefined;
  About: undefined;
  UserPreferences: undefined;
  Lists: undefined;

  Forms: undefined;
  'Forms/Login': undefined;
  'Forms/Register': undefined;
  'Forms/ChangePassword': undefined;
  'Forms/OtpCodeValidation': undefined;
};

export type MainScreenNavigationType = NativeStackNavigationProp<MainStackParamList>;
