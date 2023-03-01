import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Welcome: undefined;

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
