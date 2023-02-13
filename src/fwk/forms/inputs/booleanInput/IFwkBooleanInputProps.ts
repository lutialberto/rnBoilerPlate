import {StyleProp, TextStyle, ViewStyle} from 'react-native/types';

export interface IFwkBooleanInputProps {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  labelComponent?: JSX.Element;
  errorMessage?: string;
  errorMessageStyle?: StyleProp<TextStyle>;
  errorMessageComponent?: JSX.Element;
  style?: StyleProp<TextStyle>;
  value: boolean;
  onChange: (value: any) => void;
  enabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  borderStyle?: StyleProp<ViewStyle>;
  valueStyle?: StyleProp<ViewStyle>;
}
