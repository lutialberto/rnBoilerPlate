import {Pressable} from 'react-native';
import React, {useState} from 'react';
import {IFwkDateInputProps} from './IFwkDateInputProps';
import FwkGenericInput from '../genericInput/FwkGenericInput';
import DatePicker from 'react-native-date-picker';

const FwkDateInput = ({
  label = '',
  labelStyle,
  labelComponent,
  inputContainerStyle,
  errorMessage = '',
  errorMessageStyle,
  errorMessageComponent,
  placeholder,
  placeholderTextColor,
  value,
  onChange,
  enabled = true,
  clearIcon,
  style,
  mode,
  theme,
  fontColor,
}: IFwkDateInputProps) => {
  const [open, setOpen] = useState(false);
  const [valueToShow, setValueToShow] = useState(value?.toUTCString());

  return (
    <Pressable onPress={() => enabled && setOpen(true)}>
      <FwkGenericInput
        label={label}
        labelStyle={labelStyle}
        labelComponent={labelComponent}
        errorMessage={errorMessage}
        errorMessageStyle={errorMessageStyle}
        errorMessageComponent={errorMessageComponent}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        clearIcon={clearIcon}
        onChange={() => {}}
        enabled={false}
        style={style}
        inputContainerStyle={inputContainerStyle}
        value={valueToShow ?? ''}
      />
      <DatePicker
        modal
        open={open}
        date={value ?? new Date()}
        onConfirm={value => {
          setOpen(false);
          onChange(value);
          setValueToShow(value.toUTCString());
        }}
        onCancel={() => setOpen(false)}
        mode={mode}
        title={placeholder}
        textColor={fontColor ?? 'black'}
        theme={theme ?? 'light'}
      />
    </Pressable>
  );
};

export default FwkDateInput;
