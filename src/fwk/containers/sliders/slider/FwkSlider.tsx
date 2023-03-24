import React from 'react';
import Swiper from 'react-native-swiper';
import {IFwkSliderProps} from './IFwkSliderProps';

const FwkSlider = ({
  children,
  activeDotColor,
  autoplayTimeout,
  dotColor,
  horizontal,
  loop,
  showButtons,
  style,
}: IFwkSliderProps) => {
  return (
    <Swiper
      children={children}
      dotColor={dotColor}
      activeDotColor={activeDotColor}
      autoplayTimeout={autoplayTimeout}
      autoplay={(autoplayTimeout ?? 0) > 0}
      horizontal={horizontal}
      loop={loop}
      showsButtons={showButtons}
      style={style}
    />
  );
};

export default FwkSlider;
