import {StyleSheet} from 'react-native';
import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import ChevronLeftIcon from '~/assets/svg/icons_copy.svg';
import Menu from '~/components/containers/menu/Menu';
import {IFwkMenuItemProps} from '~/fwk/containers/menu/fwkMenuItem/IFwkMenuItemProps';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {ColorProps} from '~/hooks/theme/Models';

const translator = TRANSLATION_SCREENS.home.screens.menu;

const MenuScreen = () => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  const menuItems: IFwkMenuItemProps[] = [
    {
      label: 'Item 1 con items',
      subItems: [
        {label: 'Item 1.1'},
        {
          label: 'Item 1.2 con items',
          subItems: [{label: 'Item 1.2.1'}, {label: 'Item 1.2.2'}, {label: 'Item 1.2.3'}],
        },
      ],
      icon: <ChevronLeftIcon style={styles.icon} />,
    },
    {label: 'Item 2'},
    {label: 'Item 3'},
    {
      label: 'Item 4 con items',
      subItems: [{label: 'Item 4.1'}],
    },
  ];

  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <Menu menuItems={menuItems} />
    </AppScreenContainer>
  );
};

export default MenuScreen;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    icon: {
      color: colors.primary,
    },
  });
};
