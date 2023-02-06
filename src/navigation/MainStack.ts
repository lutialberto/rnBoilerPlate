import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;
  Buttons: undefined;
  Texts: undefined;
  Loading: undefined;
};

export type MainScreenNavigationType = NativeStackNavigationProp<MainStackParamList>;
