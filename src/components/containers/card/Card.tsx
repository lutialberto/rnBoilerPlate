import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ColorProps} from '~/hooks/theme/Models';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {useDimentions} from '~/hooks/useDimentions';
import {ICardProps} from './ICardProps';

const {vw} = useDimentions();

const Card = ({children, style}: ICardProps) => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  return <View style={[styles.container, style]}>{children}</View>;
};

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    container: {
      borderRadius: 4 * vw,
      marginVertical: 3 * vw,
      padding: 4 * vw,
      backgroundColor: colors.cardColor,
    },
  });
};

export default Card;
