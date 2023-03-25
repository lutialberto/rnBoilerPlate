import React from 'react';
import {IFwkTabItemProps} from './IFwkTabItemProps';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FwkGenericText from '~/fwk/texts/genericText/FwkGenericText';

const Tab = createMaterialTopTabNavigator();

const FwkTabItem = ({
  children,
  name,
  labelComponent,
  label,
  tabBarIndicatorStyle,
}: IFwkTabItemProps) => {
  return (
    <Tab.Screen
      key={name}
      name={name}
      children={() => children}
      options={{
        tabBarIndicatorStyle: tabBarIndicatorStyle,
        tabBarLabel({focused}) {
          return labelComponent ? labelComponent(focused) : <FwkGenericText text={label} />;
        },
      }}
    />
  );
};

export default FwkTabItem;
