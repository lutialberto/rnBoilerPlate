import {StyleSheet} from 'react-native';
import React from 'react';
import FwkDateInput from '~/fwk/forms/inputs/dateInput/FwkDateInput';
import {IFwkDateInputProps} from '~/fwk/forms/inputs/dateInput/IFwkDateInputProps';
import ClearInputIcon from '~/assets/svg/icons_clear.svg';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {ColorProps} from '~/hooks/theme/Models';
import {useDimentions} from '~/hooks/useDimentions';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';

const {vw} = useDimentions();

const DateInput = ({
  errorMessage = '',
  label = '',
  enabled = true,
  mode = 'date',
  ...props
}: IFwkDateInputProps) => {
  const {getColors, selectedTheme} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  return (
    <FwkDateInput
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
      inputContainerStyle={[
        styles.inputContainer,
        props.inputContainerStyle,
        errorMessage !== '' ? styles.inputInvalid : {},
        !enabled ? styles.inputDisabled : {},
      ]}
      style={[styles.input, props.style]}
      enabled={enabled}
      placeholderTextColor={enabled ? colors.fontColor : colors.disabledColor}
      mode={mode}
      fontColor={selectedTheme === 'dark' ? 'white' : 'black'}
      theme={selectedTheme === 'dark' ? 'dark' : 'light'}
    />
  );
};

export default DateInput;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomColor: colors.fontColor,
      borderBottomWidth: 1,
    },
    input: {
      fontSize: vw * 4,
      paddingVertical: 0,
      color: colors.fontColor,
    },
    inputInvalid: {
      borderBottomColor: colors.red,
    },
    inputDisabled: {
      borderBottomColor: colors.disabledColor,
    },
  });
};
