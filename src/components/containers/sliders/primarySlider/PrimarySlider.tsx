import {StyleSheet} from 'react-native';
import React from 'react';
import {IFwkSliderProps} from '~/fwk/containers/sliders/slider/IFwkSliderProps';
import FwkSlider from '~/fwk/containers/sliders/slider/FwkSlider';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';

const PrimarySlider = ({
  autoplayTimeout = 0,
  horizontal = true,
  loop = false,
  showButtons = false,
  activeDotColor,
  dotColor,
  children,
  style,
}: IFwkSliderProps) => {
  const {getColors} = useThemeHandler();
  const colors = getColors();

  return (
    <FwkSlider
      children={children}
      autoplayTimeout={autoplayTimeout}
      horizontal={horizontal}
      loop={loop}
      showButtons={showButtons}
      style={style}
      dotColor={dotColor ?? colors.gray}
      activeDotColor={activeDotColor ?? colors.primary}
    />
  );
};

export default PrimarySlider;

const styles = StyleSheet.create({});
