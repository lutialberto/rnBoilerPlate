import {StyleSheet} from 'react-native';
import React from 'react';
import {useDimentions} from '~/hooks/useDimentions';
import {ColorProps} from '~/hooks/theme/Models';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {IFwkGenericTextProps} from '~/fwk/texts/genericText/IFwkGenericTextProps';
import FwkGenericText from '~/fwk/texts/genericText/FwkGenericText';

const {vw} = useDimentions();

const PrimaryText = ({text, style}: IFwkGenericTextProps) => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  return <FwkGenericText text={text} style={[styles.text, style]} />;
};

export default PrimaryText;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    text: {
      color: colors.fontColor,
      fontFamily: 'Arial',
      fontSize: vw * 5,
    },
  });
};
