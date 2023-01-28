import {StyleProp, TextStyle, ViewStyle} from 'react-native/types';

export interface IFwkGenericButtonProps {
  onPress: () => void;
  label?: string;
  enabled?: boolean;
  icon?: Element;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  labelComponent?: Element;
}
