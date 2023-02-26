import {Text} from 'react-native';
import React from 'react';
import {IFwkGenericTextProps} from './IFwkGenericTextProps';

const FwkGenericText = ({text, style, ...props}: IFwkGenericTextProps) => {
  return (
    <Text {...props} style={style}>
      {text}
    </Text>
  );
};

export default FwkGenericText;
