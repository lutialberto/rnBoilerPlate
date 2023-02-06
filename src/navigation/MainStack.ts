import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;
  Buttons: undefined;
  Texts: undefined;
  Loading: undefined;
  Modals: undefined;
};

export type MainScreenNavigationType = NativeStackNavigationProp<MainStackParamList>;
