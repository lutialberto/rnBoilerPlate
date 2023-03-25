import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';

const WeatherTab = () => {
  return (
    <AppScreenContainer style={{justifyContent: 'center', alignItems: 'center'}}>
      <PrimaryText text="Solapa de Clima" />
    </AppScreenContainer>
  );
};

export default WeatherTab;
