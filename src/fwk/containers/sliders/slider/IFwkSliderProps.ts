import {StyleProp, ViewStyle} from 'react-native/types';

export interface IFwkSliderProps {
  children: JSX.Element[];
  showButtons?: boolean;
  autoplayTimeout?: number;
  loop?: boolean;
  horizontal?: boolean;
  dotColor?: string;
  activeDotColor?: string;
  style?: StyleProp<ViewStyle>;
}
