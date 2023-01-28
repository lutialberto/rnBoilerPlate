import {TouchableOpacity} from 'react-native';
import React from 'react';
import {IFwkGenericButtonProps} from './IFwkGenericButtonProps';
import FwkGenericText from '~/fwk/texts/genericText/FwkGenericText';

const FwkGenericButton = ({
  enabled = true,
  onPress,
  label = '',
  icon = <></>,
  containerStyle,
  labelStyle,
  labelComponent,
}: IFwkGenericButtonProps) => {
  return (
    <TouchableOpacity
      onPress={enabled ? onPress : () => {}}
      style={containerStyle}
      disabled={!enabled}>
      <>
        {icon}
        {labelComponent ?? <FwkGenericText text={label} style={labelStyle} />}
      </>
    </TouchableOpacity>
  );
};

export default FwkGenericButton;
