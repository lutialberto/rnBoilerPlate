import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import FwkGenericText from '~/fwk/texts/genericText/FwkGenericText';
import {IFwkMenuItemProps} from './IFwkMenuItemProps';

const FwkMenuItem = ({
  label,
  labelComponent,
  isCollapsed = true,
  icon,
  onPress = () => {},
  subItems = [],
  collapsedIcon,
  notCollapsedIcon,
  menuItemContainerStyle,
  labelContainerStyle,
}: IFwkMenuItemProps) => {
  const [collapsed, setcollapsed] = useState(isCollapsed);
  return (
    <>
      <TouchableOpacity
        key={label}
        onPress={() => {
          setcollapsed(prev => !prev);
          onPress();
        }}
        style={menuItemContainerStyle}>
        <View style={labelContainerStyle}>
          {icon}
          {labelComponent ? labelComponent(label) : <FwkGenericText text={label} />}
        </View>
        {subItems.length > 0 && (collapsed ? collapsedIcon : notCollapsedIcon)}
      </TouchableOpacity>
      {!collapsed &&
        subItems.map(subItem => (
          <FwkMenuItem
            {...subItem}
            labelComponent={labelComponent}
            collapsedIcon={collapsedIcon}
            notCollapsedIcon={notCollapsedIcon}
            menuItemContainerStyle={menuItemContainerStyle}
          />
        ))}
    </>
  );
};

export default FwkMenuItem;
