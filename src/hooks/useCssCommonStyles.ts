import {StyleSheet} from 'react-native/types';
import {ColorProps} from './theme/Models';
import {useThemeHandler} from './theme/useThemeHandler';
import {useDimentions} from './useDimentions';

export const useCssCommonStyles = () => {
  const {vw} = useDimentions();
  const {getColors} = useThemeHandler();
  const colors = getColors();

  const getStyles = (colors: ColorProps) => {
    return StyleSheet.create({
      primaryText: {
        color: colors.fontColor,
        fontFamily: 'Arial',
        fontSize: vw * 5,
      },
    });
  };

  return getStyles(colors);
};
