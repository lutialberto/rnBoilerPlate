import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IFwkBooleanInputProps} from './IFwkBooleanInputProps';
import FwkGenericText from '~/fwk/texts/genericText/FwkGenericText';

const FwkBooleanInput = ({
  label = '',
  labelStyle,
  labelComponent,
  errorMessage = '',
  errorMessageStyle,
  errorMessageComponent,
  value,
  onChange,
  enabled = true,
  containerStyle,
  borderStyle,
  valueStyle,
}: IFwkBooleanInputProps) => {
  return (
    <View>
      <View style={containerStyle}>
        <TouchableOpacity
          style={borderStyle}
          onPress={() => {
            if (enabled) onChange(!value);
          }}>
          <View style={valueStyle}></View>
        </TouchableOpacity>
        {labelComponent ?? <FwkGenericText text={label} style={labelStyle} />}
      </View>
      {errorMessageComponent ?? <FwkGenericText style={errorMessageStyle} text={errorMessage} />}
    </View>
  );
};

export default FwkBooleanInput;
