import {StyleProp, TextStyle, ViewStyle} from 'react-native/types';

export interface IFwkGenericInputProps {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  labelComponent?: JSX.Element;
  errorMessage?: string;
  errorMessageStyle?: StyleProp<TextStyle>;
  errorMessageComponent?: JSX.Element;
  placeholder?: string;
  placeholderTextColor?: string;
  style?: StyleProp<TextStyle>;
  value: string;
  onChange: (value: any) => void;
  enabled?: boolean;
  type?: 'password' | 'text';
  passwordIcon1?: JSX.Element;
  passwordIcon2?: JSX.Element;
  clearIcon?: JSX.Element;
  inputContainerStyle?: StyleProp<ViewStyle>;
  onFocus?: () => void;
  onBlur?: () => void;
  multiline?: boolean;
}
