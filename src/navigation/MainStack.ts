import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;
  Buttons: undefined;
  Texts: undefined;
  Loading: undefined;
  Modals: undefined;
  Toasts: undefined;
  Forms: undefined;
};

export type MainScreenNavigationType = NativeStackNavigationProp<MainStackParamList>;
