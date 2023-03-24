import {StyleProp, TextStyle, ViewStyle} from 'react-native/types';

export interface IFwkDateInputProps {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  labelComponent?: JSX.Element;
  errorMessage?: string;
  errorMessageStyle?: StyleProp<TextStyle>;
  errorMessageComponent?: JSX.Element;
  placeholder?: string;
  placeholderTextColor?: string;
  style?: StyleProp<TextStyle>;
  value: Date | undefined;
  onChange: (value: Date) => void;
  enabled?: boolean;
  mode?: 'date' | 'time' | 'datetime';
  clearIcon?: JSX.Element;
  inputContainerStyle?: StyleProp<ViewStyle>;
  fontColor?: string;
  theme?: 'light' | 'dark';
}
