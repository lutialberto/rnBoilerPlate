import {StyleProp, ViewStyle} from 'react-native/types';
import {IFwkMenuItemProps} from './fwkMenuItem/IFwkMenuItemProps';

export interface IFwkMenuProps {
  menuItems: IFwkMenuItemProps[];
  subItemsIconCollapsed?: JSX.Element;
  subItemsIconNotCollapsed?: JSX.Element;
  menuItemContainerStyle?: StyleProp<ViewStyle>;
  labelComponent?: (label: string) => JSX.Element;
  labelContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
