import {StyleProp, ViewStyle} from 'react-native/types';

export interface IFwkTabContainerProps {
  tabItems: {
    name: string;
    children: JSX.Element;
    label: string;
  }[];
  tabBarItemStyle?: StyleProp<ViewStyle>;
}
