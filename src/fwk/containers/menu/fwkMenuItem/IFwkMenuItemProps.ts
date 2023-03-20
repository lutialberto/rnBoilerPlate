import {StyleProp, ViewStyle} from 'react-native/types';

export interface IFwkMenuItemProps {
  label: string;
  labelComponent?: (label: string) => JSX.Element;
  icon?: JSX.Element;
  onPress?: () => void;
  subItems?: IFwkMenuItemProps[];
  isCollapsed?: boolean;
  collapsedIcon?: JSX.Element;
  notCollapsedIcon?: JSX.Element;
  menuItemContainerStyle?: StyleProp<ViewStyle>;
  labelContainerStyle?: StyleProp<ViewStyle>;
}
