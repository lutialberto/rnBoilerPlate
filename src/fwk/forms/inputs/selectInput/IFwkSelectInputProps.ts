import {StyleProp, TextStyle, ViewStyle} from 'react-native/types';
import {IFwkGenericInputProps} from '../genericInput/IFwkGenericInputProps';

export interface IFwkSelectInputProps extends IFwkGenericInputProps {
  options: SelectorOptionItem[];
  enableSearchBar?: boolean;
  dropDownPickerStyle?: StyleProp<ViewStyle>;
  modalContentContainerStyle?: StyleProp<ViewStyle>;
  modalTitleStyle?: StyleProp<TextStyle>;
  itemSeparatorStyle?: StyleProp<ViewStyle>;
  selectedItemLabelStyle?: StyleProp<TextStyle>;
  listParentContainerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  arrowDownIconComponent?: JSX.Element;
  closeIconComponent?: JSX.Element;
  searchContainerStyle?: StyleProp<ViewStyle>;
  searchPlaceholder?: string;
  searchPlaceholderTextColor?: string;
  searchTextInputStyle?: StyleProp<TextStyle>;
}

export interface SelectorOptionItem {
  value: string;
  label: string;
}
