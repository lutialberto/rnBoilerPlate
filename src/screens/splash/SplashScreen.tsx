import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';

const SplashScreen = () => {
  return (
    <AppScreenContainer>
      <PrimaryText text="SPLASH SCREEN" variant="title" />
    </AppScreenContainer>
  );
};

export default SplashScreen;
