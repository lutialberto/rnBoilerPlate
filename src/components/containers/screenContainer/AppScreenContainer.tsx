import {StyleSheet} from 'react-native';
import React from 'react';
import {IFwkScreenContainerProps} from '~/fwk/containers/screenContainer/IFwkScreenContainerProps';
import FwkScreenContainer from '~/fwk/containers/screenContainer/FwkScreenContainer';
import {useDimentions} from '~/hooks/useDimentions';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {ColorProps} from '~/hooks/theme/Models';

const {vw} = useDimentions();

const AppScreenContainer = ({children, style}: IFwkScreenContainerProps) => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  return <FwkScreenContainer style={[styles.container, style]}>{children}</FwkScreenContainer>;
};

export default AppScreenContainer;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.backgroundColor,
      paddingHorizontal: vw * 3,
      flex: 1,
    },
  });
};
