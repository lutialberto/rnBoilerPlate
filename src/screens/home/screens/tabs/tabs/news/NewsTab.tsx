import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';

const NewsTab = () => {
  return (
    <AppScreenContainer style={{justifyContent: 'center', alignItems: 'center'}}>
      <PrimaryText text="Solapa de Noticias" />
    </AppScreenContainer>
  );
};

export default NewsTab;
