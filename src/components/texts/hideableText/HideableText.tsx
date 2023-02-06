import React from 'react';
import PrimaryText from '../primaryText/PrimaryText';
import {IHideableTextProps} from './IHideableTextProps';

const HideableText = ({hiddenText, regex, text, replaceWith, ...props}: IHideableTextProps) => {
  return <PrimaryText {...props} text={hiddenText ? text.replace(regex, replaceWith) : text} />;
};

export default HideableText;
