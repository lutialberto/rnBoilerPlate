import {StyleProp, TextStyle, ViewStyle} from 'react-native/types';

export interface IFwkGenericInputProps {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  labelComponent?: Element;
  errorMessage?: string;
  errorMessageStyle?: StyleProp<TextStyle>;
  errorMessageComponent?: Element;
  placeholder?: string;
  placeholderTextColor?: string;
  style?: StyleProp<TextStyle>;
  value: string;
  onChange: (value: any) => void;
  enabled?: boolean;
  type?: 'password' | 'text';
  passwordIcon1?: Element;
  passwordIcon2?: Element;
  clearIcon?: Element;
  inputContainerStyle?: StyleProp<ViewStyle>;
  onFocus?: () => void;
  onBlur?: () => void;
}
