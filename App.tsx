import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CopyIcon from '~/assets/svg/icons_copy.svg';

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <CopyIcon style={{color: 'red'}} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
