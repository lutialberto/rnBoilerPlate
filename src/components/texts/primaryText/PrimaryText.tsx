import React from 'react';
import {IFwkGenericTextProps} from '~/fwk/texts/genericText/IFwkGenericTextProps';
import FwkGenericText from '~/fwk/texts/genericText/FwkGenericText';
import {useCssCommonStyles} from '~/hooks/useCssCommonStyles';

const PrimaryText = ({text, style}: IFwkGenericTextProps) => {
  const {primaryText} = useCssCommonStyles();

  return <FwkGenericText text={text} style={[primaryText, style]} />;
};

export default PrimaryText;
