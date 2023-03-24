import {StyleSheet} from 'react-native';
import React from 'react';
import PrimarySlider from '~/components/containers/sliders/primarySlider/PrimarySlider';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import SliderItem from './components/sliderItem/SliderItem';
import {TRANSLATION_SCREENS} from '~/constants/Translator';

const translator = TRANSLATION_SCREENS.home.screens.sliders;

const SlidersScreen = () => {
  const slideItems = [1, 2, 3, 4, 5];
  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <PrimarySlider>
        {slideItems.map(item => (
          <SliderItem text={`Slide ${item}`} key={item} />
        ))}
      </PrimarySlider>
    </AppScreenContainer>
  );
};

export default SlidersScreen;

const styles = StyleSheet.create({});
