import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IFwkScreenContainerProps} from './IFwkScreenContainerProps';

const FwkScreenContainer = ({children, style}: IFwkScreenContainerProps) => {
  return <SafeAreaView style={style}>{children}</SafeAreaView>;
};

export default FwkScreenContainer;

const styles = StyleSheet.create({});
