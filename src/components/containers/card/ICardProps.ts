import {StyleProp, ViewStyle} from 'react-native/types';

export interface ICardProps {
  style?: StyleProp<ViewStyle>;
  children: JSX.Element | JSX.Element[];
}
