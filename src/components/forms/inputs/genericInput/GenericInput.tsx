import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {IFwkGenericInputProps} from '~/fwk/forms/inputs/genericInput/IFwkGenericInputProps';
import FwkGenericInput from '~/fwk/forms/inputs/genericInput/FwkGenericInput';
import ClearInputIcon from '~/assets/svg/icons_clear.svg';
import {ITheme, useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {ColorProps} from '~/hooks/theme/Models';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import ViewOnIcon from '~/assets/svg/icons_view_on.svg';
import ViewOffIcon from '~/assets/svg/icons_view_off.svg';
import {useDimentions} from '~/hooks/useDimentions';

const {vw} = useDimentions();

const GenericInput = ({
  errorMessage = '',
  label = '',
  enabled = true,
  onFocus = () => {},
  onBlur = () => {},
  ...props
}: IFwkGenericInputProps) => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <FwkGenericInput
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
      labelComponent={
        props.labelComponent ?? (
          <PrimaryText text={label} style={[props.labelStyle]} variant="label" />
        )
      }
      passwordIcon1={<ViewOnIcon style={{color: colors.fontColor}} />}
      passwordIcon2={<ViewOffIcon style={{color: colors.fontColor}} />}
      inputContainerStyle={[
        styles.inputContainer,
        props.inputContainerStyle,
        errorMessage !== '' ? styles.inputInvalid : {},
        isFocus ? styles.inputFocused : {},
        !enabled ? styles.inputDisabled : {},
      ]}
      style={[styles.input, props.style, !enabled ? styles.inputLabelDisabled : {}]}
      onBlur={() => {
        setIsFocus(false);
        onBlur();
      }}
      onFocus={() => {
        setIsFocus(true);
        onFocus();
      }}
      enabled={enabled}
      placeholderTextColor={enabled ? colors.fontColor : colors.disabledColor}
    />
  );
};

export default GenericInput;

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
    inputFocused: {
      borderBottomColor: colors.primary,
    },
    inputDisabled: {
      borderBottomColor: colors.disabledColor,
    },
  });
};
