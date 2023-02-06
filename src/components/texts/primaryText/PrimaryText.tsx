import React from 'react';
import {StyleSheet} from 'react-native';
import Fonts from '~/constants/Fonts';
import FwkGenericText from '~/fwk/texts/genericText/FwkGenericText';
import {ColorProps} from '~/hooks/theme/Models';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {useCssCommonStyles} from '~/hooks/useCssCommonStyles';
import {useDimentions} from '~/hooks/useDimentions';
import {IPrimaryTextProps} from './IPrimaryTextProps';

const {vw} = useDimentions();

const PrimaryText = ({text, style, variant = 'default'}: IPrimaryTextProps) => {
  const {primaryText} = useCssCommonStyles();
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  const getTextStyle = () => {
    const textStyles = {
      default: [primaryText, style],
      title: [primaryText, styles.title, style],
      errorMessage: [primaryText, styles.errorMessage, style],
      label: [primaryText, styles.label, style],
    };

    return textStyles[variant];
  };

  return <FwkGenericText text={text} style={getTextStyle()} />;
};

export default PrimaryText;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    title: {
      fontSize: vw * 10,
      fontFamily: Fonts.Bold,
    },
    errorMessage: {
      fontSize: vw * 4,
      fontFamily: Fonts.Light,
      color: colors.red,
    },
    label: {
      fontSize: vw * 4,
      fontFamily: Fonts.Bold,
      color: colors.gray,
      textTransform: 'uppercase',
      letterSpacing: vw,
    },
  });
};
