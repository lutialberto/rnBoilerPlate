import {StyleProp, ViewStyle} from 'react-native/types';
import {IFwkGenericInputProps} from '~/fwk/forms/inputs/genericInput/IFwkGenericInputProps';

export interface IFwkCodeInputProps extends IFwkGenericInputProps {
  length: number;
  rootStyle?: StyleProp<ViewStyle>;
  cellStyle?: StyleProp<ViewStyle>;
  cellFocusStyle?: StyleProp<ViewStyle>;
}
