import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDimentions} from '~/hooks/useDimentions';
import {IFwkBooleanInputProps} from '~/fwk/forms/inputs/booleanInput/IFwkBooleanInputProps';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {ColorProps} from '~/hooks/theme/Models';
import FwkBooleanInput from '~/fwk/forms/inputs/booleanInput/FwkBooleanInput';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';

const {vw} = useDimentions();

const BooleanInput = ({
  label = '',
  labelStyle,
  labelComponent,
  errorMessage = '',
  errorMessageStyle,
  errorMessageComponent,
  enabled = true,
  containerStyle,
  borderStyle,
  valueStyle,
  ...props
}: IFwkBooleanInputProps) => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  return (
    <FwkBooleanInput
      {...props}
      labelComponent={
        labelComponent ?? <PrimaryText text={label} style={labelStyle} variant="label" />
      }
      errorMessageComponent={
        errorMessageComponent ?? (
          <PrimaryText text={errorMessage} style={errorMessageStyle} variant="errorMessage" />
        )
      }
      containerStyle={[styles.container, containerStyle]}
      borderStyle={[
        styles.border,
        errorMessage !== '' ? styles.inputInvalid : {},
        !enabled ? styles.inputDisabled : {},
      ]}
      valueStyle={[styles.value, props.value ? styles.trueValue : styles.falseValue]}
    />
  );
};

export default BooleanInput;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    border: {
      borderColor: colors.fontColor,
      borderWidth: 2,
      backgroundColor: 'transparent',
      aspectRatio: 1,
      marginRight: vw * 2,
      width: vw * 4,
      borderRadius: vw * 4,
    },
    value: {
      flex: 1,
      borderRadius: vw * 4,
    },
    trueValue: {
      backgroundColor: colors.primary,
    },
    falseValue: {
      backgroundColor: 'transparent',
    },
    inputInvalid: {
      borderColor: colors.red,
    },
    inputDisabled: {
      borderColor: colors.disabledColor,
    },
  });
};
