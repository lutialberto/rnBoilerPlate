import {StyleSheet} from 'react-native';
import React from 'react';
import {IFwkMenuProps} from '~/fwk/containers/menu/IFwkMenuProps';
import FwkMenu from '~/fwk/containers/menu/FwkMenu';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import ChevronIcon from '~/assets/svg/icons_chevron_left.svg';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {ColorProps} from '~/hooks/theme/Models';

const Menu = ({...props}: IFwkMenuProps) => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  return (
    <FwkMenu
      {...props}
      labelComponent={label => <PrimaryText text={label} style={styles.label} />}
      menuItemContainerStyle={styles.menuItemContainer}
      labelContainerStyle={styles.labelContainer}
      containerStyle={styles.container}
      subItemsIconCollapsed={<ChevronIcon style={styles.iconRight} />}
      subItemsIconNotCollapsed={<ChevronIcon style={styles.iconDown} />}
    />
  );
};

export default Menu;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    container: {
      borderWidth: 1,
      borderRadius: 25,
      overflow: 'hidden',
      backgroundColor: colors.backgroundColor,
      borderColor: colors.primary,
    },
    menuItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4%',
    },
    labelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconRight: {
      color: colors.gray,
      transform: [{rotate: '180deg'}],
    },
    iconDown: {
      color: colors.gray,
      transform: [{rotate: '-90deg'}],
    },
    label: {
      paddingLeft: 5,
      color: colors.primary,
    },
  });
};
