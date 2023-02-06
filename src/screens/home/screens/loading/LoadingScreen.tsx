import React from 'react';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import Card from '~/components/containers/card/Card';
import ScreenSpinner from '~/components/loading/screenSpinner/ScreenSpinner';
import Spinner from '~/components/loading/spinner/Spinner';

const translator = TRANSLATION_SCREENS.home.screens.loading;

const LoadingScreen = () => {
  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <Card>
        <ScreenSpinner visible={true} />
        <PrimaryText text={translator.text1} />
        <PrimaryText text={translator.text1} />
        <PrimaryText text={translator.text1} />
      </Card>
      <Card>
        <Spinner visible={true} />
        <PrimaryText text={translator.text2} />
        <PrimaryText text={translator.text2} />
      </Card>
    </AppScreenContainer>
  );
};

export default LoadingScreen;
