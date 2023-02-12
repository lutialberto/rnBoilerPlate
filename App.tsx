import React from 'react';
import FwkGenericToast from '~/fwk/messages/genericToast/FwkGenericToast';
import MainNavigator from '~/navigation/MainNavigator';

const App = () => {
  return (
    <>
      <MainNavigator />
      <FwkGenericToast />
    </>
  );
};

export default App;
