import {Text, View} from 'react-native';
import React from 'react';
import {IFwkCodeInputProps} from './IFwkCodeInputProps';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import FwkGenericText from '~/fwk/texts/genericText/FwkGenericText';

const FwkCodeInput = ({
  length,
  value,
  onChange,
  errorMessage = '',
  errorMessageComponent,
  errorMessageStyle,
  rootStyle,
  cellStyle,
  cellFocusStyle,
}: IFwkCodeInputProps) => {
  const ref = useBlurOnFulfill({value, cellCount: length});
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value: value,
    setValue: onChange,
  });

  return (
    <View>
      <CodeField
        ref={ref}
        {...codeFieldProps}
        value={value}
        onChangeText={onChange}
        cellCount={length}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        rootStyle={rootStyle}
        renderCell={({index, symbol, isFocused}) => (
          <FwkGenericText
            key={index}
            text={symbol}
            style={[cellStyle, isFocused && cellFocusStyle]}
            onLayout={getCellOnLayoutHandler(index)}
          />
        )}
      />
      {errorMessageComponent ?? <FwkGenericText style={errorMessageStyle} text={errorMessage} />}
    </View>
  );
};

export default FwkCodeInput;
