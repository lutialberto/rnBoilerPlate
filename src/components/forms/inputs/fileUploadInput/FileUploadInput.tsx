import {StyleSheet} from 'react-native';
import React from 'react';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {ColorProps} from '~/hooks/theme/Models';
import ClearInputIcon from '~/assets/svg/icons_clear.svg';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import SearchIcon from '~/assets/svg/icons_upload.svg';
import {useDimentions} from '~/hooks/useDimentions';
import {IFwkFileUploadInputProps} from '~/fwk/forms/inputs/fileUploadInput/IFwkFileUploadInputProps';
import FwkFileUploadInput from '~/fwk/forms/inputs/fileUploadInput/FwkFileUploadInput';

const {vw} = useDimentions();

const FileUploadInput = ({
  errorMessage = '',
  label = '',
  enabled = true,
  ...props
}: IFwkFileUploadInputProps) => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  return (
    <FwkFileUploadInput
      {...props}
      clearIcon={
        <ClearInputIcon
          style={{
            color: colors.fontColor,
            padding: 9,
          }}
        />
      }
      errorMessage={errorMessage}
      errorMessageComponent={
        props.errorMessageComponent ?? (
          <PrimaryText text={errorMessage} style={props.errorMessageStyle} variant="errorMessage" />
        )
      }
      label={label}
      labelComponent={
        props.labelComponent ?? (
          <PrimaryText text={label} style={[props.labelStyle]} variant="label" />
        )
      }
      inputContainerStyle={[
        styles.inputContainer,
        props.inputContainerStyle,
        errorMessage !== '' ? styles.inputInvalid : {},
        !enabled ? styles.inputDisabled : {},
      ]}
      style={[styles.input, props.style, styles.inputLabelDisabled]}
      enabled={enabled}
      placeholderTextColor={enabled ? colors.fontColor : colors.disabledColor}
      searchFileIcon={
        <SearchIcon
          style={{
            color: colors.fontColor,
            margin: 5,
          }}
        />
      }
    />
  );
};

export default FileUploadInput;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomColor: colors.fontColor,
      borderBottomWidth: 1,
    },
    input: {
      flex: 1,
      fontSize: vw * 4,
      paddingVertical: 0,
      color: colors.fontColor,
    },
    inputLabelDisabled: {
      color: colors.disabledColor,
    },
    inputInvalid: {
      borderBottomColor: colors.red,
    },
    inputDisabled: {
      borderBottomColor: colors.disabledColor,
    },
  });
};
