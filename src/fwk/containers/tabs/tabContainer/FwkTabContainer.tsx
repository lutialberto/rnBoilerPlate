import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TabItem from '~/components/containers/tabs/tabItem/TabItem';
import {IFwkTabContainerProps} from './IFwkTabContainerProps';

const Tab = createMaterialTopTabNavigator();

const FwkTabContainer = ({tabItems, tabBarItemStyle}: IFwkTabContainerProps) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle,
      }}>
      {tabItems.map(tab => TabItem(tab))}
    </Tab.Navigator>
  );
};

export default FwkTabContainer;
