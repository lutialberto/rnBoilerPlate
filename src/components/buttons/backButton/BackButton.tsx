import {StyleSheet} from 'react-native';
import React from 'react';
import PrimaryButton from '../primaryButton/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationType} from '~/navigation/MainStack';
import {IPrimaryButtonProps} from '../primaryButton/IPrimaryButtonProps';
import ChevronLeftIcon from '~/assets/svg/icons_chevron_left.svg';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {ColorProps} from '~/hooks/theme/Models';
import {ROUTE_SIGNED_IN_DEFAULT} from '~/navigation/routes/SignedInRoutes';
import {useDimentions} from '~/hooks/useDimentions';
import {TRANSLATION_BUTTONS} from '~/constants/Translator';

const {vw} = useDimentions();

const BackButton = ({onPress, label}: IPrimaryButtonProps) => {
  const navigator = useNavigation<MainScreenNavigationType>();
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  return (
    <PrimaryButton
      label={label ?? TRANSLATION_BUTTONS.back}
      containerStyle={styles.container}
      variant={'secondaryNoBorder'}
      icon={<ChevronLeftIcon style={styles.icon} />}
      onPress={() => {
        onPress();
        if (navigator.canGoBack()) {
          navigator.goBack();
        } else {
          navigator.navigate(ROUTE_SIGNED_IN_DEFAULT);
        }
      }}
    />
  );
};

export default BackButton;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    container: {
      borderColor: 'blue',
      borderWidth: 1,
      width: vw * 20,
      marginHorizontal: 0,
    },
    icon: {
      color: colors.primary,
    },
  });
};
