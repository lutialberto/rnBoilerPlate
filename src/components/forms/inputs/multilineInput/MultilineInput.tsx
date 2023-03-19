import {StyleSheet} from 'react-native';
import React from 'react';
import {IFwkGenericInputProps} from '~/fwk/forms/inputs/genericInput/IFwkGenericInputProps';
import GenericInput from '../genericInput/GenericInput';

const MultilineInput = ({style, inputContainerStyle, ...props}: IFwkGenericInputProps) => {
  return (
    <GenericInput
      {...props}
      multiline
      inputContainerStyle={[styles.inputContainer, inputContainerStyle]}
      style={[styles.input, style]}
    />
  );
};

export default MultilineInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
  },
  input: {
    height: 100,
    textAlignVertical: 'top',
  },
});
