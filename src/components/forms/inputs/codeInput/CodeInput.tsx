import {StyleSheet} from 'react-native';
import React from 'react';
import {IFwkCodeInputProps} from '~/fwk/forms/inputs/codeInput/IFwkCodeInputProps';
import FwkCodeInput from '~/fwk/forms/inputs/codeInput/FwkCodeInput';
import {ColorProps} from '~/hooks/theme/Models';
import {useDimentions} from '~/hooks/useDimentions';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';

const {vw} = useDimentions();

const CodeInput = ({
  errorMessage = '',
  rootStyle,
  cellStyle,
  cellFocusStyle,
  ...props
}: IFwkCodeInputProps) => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  return (
    <FwkCodeInput
      {...props}
      rootStyle={[styles.root, rootStyle]}
      cellStyle={[styles.cell, cellStyle]}
      cellFocusStyle={[styles.focusCell, cellFocusStyle]}
      errorMessageComponent={
        props.errorMessageComponent ?? (
          <PrimaryText
            text={errorMessage}
            style={[styles.error, props.errorMessageStyle]}
            variant="errorMessage"
          />
        )
      }
    />
  );
};

export default CodeInput;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    root: {
      justifyContent: 'center',
    },
    cell: {
      aspectRatio: 0.7,
      width: vw * 10,
      fontSize: vw * 10,
      borderWidth: 1,
      color: colors.fontColor,
      borderColor: colors.fontColor,
      borderRadius: vw * 2,
      textAlign: 'center',
      marginHorizontal: vw * 1,
    },
    focusCell: {
      borderColor: colors.primary,
    },
    error: {
      textAlign: 'center',
    },
  });
};
