import React from 'react';
import PrimaryButton from '../primaryButton/PrimaryButton';
import {TRANSLATION_BUTTONS} from '~/constants/Translator';
import {useFileDownload} from '~/hooks/fileDownload/useFileDownload';
import DownloadIcon from '~/assets/svg/icons_download.svg';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {useDimentions} from '~/hooks/useDimentions';
import {IDownloadButtonProps} from './IDownloadButtonProps';

const {vw} = useDimentions();

const DownloadButton = ({
  url,
  fileName,
  fileExtension,
  label = TRANSLATION_BUTTONS.download,
  onPress,
  ...props
}: IDownloadButtonProps) => {
  const {downloadFile} = useFileDownload();
  const {getColors} = useThemeHandler();
  const colors = getColors();

  const handleDownload = () => {
    downloadFile(
      url,
      fileName,
      fileExtension,
      () => onPress,
      error => console.log({error}),
    );
  };

  return (
    <PrimaryButton
      {...props}
      onPress={handleDownload}
      label={label}
      icon={<DownloadIcon style={{color: colors.fontColor}} width={vw * 6} height={vw * 6} />}
    />
  );
};

export default DownloadButton;
