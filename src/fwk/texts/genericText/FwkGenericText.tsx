import {Text} from 'react-native';
import React from 'react';
import {IFwkGenericTextProps} from './IFwkGenericTextProps';

const FwkGenericText = ({text, style}: IFwkGenericTextProps) => {
  return <Text style={style}>{text}</Text>;
};

export default FwkGenericText;
