import {StyleProp, ViewStyle} from 'react-native/types';

export interface IFwkTabItemProps {
  name: string;
  children: JSX.Element;
  label: string;
  labelComponent?: (focused: boolean) => JSX.Element;
  tabBarIndicatorStyle?: StyleProp<ViewStyle>;
}
