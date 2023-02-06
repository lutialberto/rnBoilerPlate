import {StyleProp, ViewStyle} from 'react-native/types';

export interface IFwkGenericModalProps {
  children?: JSX.Element | JSX.Element[];
  isVisible: boolean;
  onClose: () => void;
  mainContainerStyle?: StyleProp<ViewStyle>;
  visibleContainerStyle?: StyleProp<ViewStyle>;
  childrenContainerStyle?: StyleProp<ViewStyle>;
  closeIconColor?: string;
  transparentAreaBackgroundColor?: string;
  animationType?: 'fade' | 'slide';
}
