import {StyleSheet} from 'react-native';
import React from 'react';
import Spinner from '../spinner/Spinner';
import {ISpinnerProps} from '../spinner/ISpinnerProps';

const ScreenSpinner = ({visible, color, style}: ISpinnerProps) => {
  return <Spinner visible={visible} style={[styles.spinner, style]} color={color} />;
};

export default ScreenSpinner;

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
});
