import {StyleProp, TextStyle, ViewStyle} from 'react-native/types';
import {File} from '~/hooks/fileUpload/Models';

export interface IFwkFileUploadInputProps {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  labelComponent?: JSX.Element;
  errorMessage?: string;
  errorMessageStyle?: StyleProp<TextStyle>;
  errorMessageComponent?: JSX.Element;
  placeholder?: string;
  placeholderTextColor?: string;
  style?: StyleProp<TextStyle>;
  value: File;
  onChange: (value: File) => void;
  enabled?: boolean;
  clearIcon?: JSX.Element;
  searchFileIcon?: JSX.Element;
  inputContainerStyle?: StyleProp<ViewStyle>;
  handlePickDocument: () => void;
}
