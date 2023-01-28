import {Share} from 'react-native';
import React from 'react';
import PrimaryButton from '../primaryButton/PrimaryButton';
import {TRANSLATION_BUTTONS} from '~/constants/Translator';
import {IShareButtonProps} from './IShareButtonProps';

const ShareButton = ({
  label = TRANSLATION_BUTTONS.share,
  message,
  onPress = () => {},
  ...props
}: IShareButtonProps) => {
  return (
    <PrimaryButton
      {...props}
      label={label}
      onPress={() => {
        Share.share({message});
        onPress();
      }}
    />
  );
};

export default ShareButton;
