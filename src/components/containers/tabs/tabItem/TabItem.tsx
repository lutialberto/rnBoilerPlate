import {StyleSheet} from 'react-native';
import React from 'react';
import {IFwkTabItemProps} from '~/fwk/containers/tabs/tabItem/IFwkTabItemProps';
import FwkTabItem from '~/fwk/containers/tabs/tabItem/FwkTabItem';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import {ColorProps} from '~/hooks/theme/Models';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';

const TabItem = ({...props}: IFwkTabItemProps) => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  return FwkTabItem({
    ...props,
    labelComponent:
      props.labelComponent ??
      (focused => (
        <PrimaryText
          text={props.label}
          style={[styles.tabLabel, !focused && styles.tabLabelNotFocused]}
        />
      )),
    tabBarIndicatorStyle: styles.activeIndicator,
  });
};

export default TabItem;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    tabLabel: {
      color: colors.fontColor,
    },
    tabLabelNotFocused: {
      opacity: 0.5,
    },
    activeIndicator: {
      bottom: -2,
      color: colors.primary,
    },
  });
};
