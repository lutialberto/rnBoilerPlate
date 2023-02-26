import {StyleProp, TextStyle} from 'react-native/types';
import {TextProps} from 'react-native';

export interface IFwkGenericTextProps extends TextProps {
  text: string;
  style?: StyleProp<TextStyle>;
}
