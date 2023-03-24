import React from 'react';
import {IFwkMenuProps} from './IFwkMenuProps';
import FwkMenuItem from './fwkMenuItem/FwkMenuItem';
import {View} from 'react-native';

const FwkMenu = ({
  menuItems,
  subItemsIconCollapsed,
  subItemsIconNotCollapsed,
  menuItemContainerStyle,
  labelComponent,
  labelContainerStyle,
  containerStyle,
}: IFwkMenuProps) => {
  return (
    <View style={containerStyle}>
      {menuItems.map(item => (
        <FwkMenuItem
          key={item.label}
          {...item}
          labelComponent={labelComponent}
          collapsedIcon={subItemsIconCollapsed}
          notCollapsedIcon={subItemsIconNotCollapsed}
          menuItemContainerStyle={menuItemContainerStyle}
          labelContainerStyle={labelContainerStyle}
        />
      ))}
    </View>
  );
};

export default FwkMenu;
