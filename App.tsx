import React from 'react';
import GlobalErrorBoundary from '~/components/containers/errors/globalErrorBoundary/GlobalErrorBoundary';
import FwkGenericToast from '~/fwk/messages/genericToast/FwkGenericToast';
import MainNavigator from '~/navigation/MainNavigator';

const App = () => {
  return (
    <GlobalErrorBoundary>
      <>
        <MainNavigator />
        <FwkGenericToast />
      </>
    </GlobalErrorBoundary>
  );
};

export default App;
