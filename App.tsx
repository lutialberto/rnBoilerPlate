import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CopyIcon from '~/assets/svg/icons_copy.svg';
import FwkScreenContainer from '~/fwk/containers/screenContainer/FwkScreenContainer';

const App = () => {
  return (
    <FwkScreenContainer>
      <Text>App</Text>
      <CopyIcon style={{color: 'red'}} />
    </FwkScreenContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
