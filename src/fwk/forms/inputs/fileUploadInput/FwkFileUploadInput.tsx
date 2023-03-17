import {TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IFwkFileUploadInputProps} from './IFwkFileUploadInputProps';
import FwkGenericText from '~/fwk/texts/genericText/FwkGenericText';

const FwkFileUploadInput = ({
  label,
  labelStyle,
  labelComponent,
  inputContainerStyle,
  errorMessage,
  errorMessageStyle,
  errorMessageComponent,
  placeholder,
  placeholderTextColor,
  value,
  onChange,
  enabled = true,
  clearIcon,
  style,
  handlePickDocument,
  searchFileIcon,
}: IFwkFileUploadInputProps) => {
  return (
    <View>
      {label && (labelComponent ?? <FwkGenericText text={label} style={labelStyle} />)}
      <View style={inputContainerStyle}>
        <TouchableOpacity onPress={handlePickDocument} style={{flex: 1, flexDirection: 'row'}}>
          <TextInput
            value={value.name}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={style}
            onChangeText={fileName => onChange({...value, name: fileName})}
            editable={false}
          />
          {searchFileIcon}
        </TouchableOpacity>
        {value.name !== '' && enabled && (
          <TouchableOpacity onPress={() => onChange({data: '', name: '', size: 0, type: ''})}>
            <>{clearIcon}</>
          </TouchableOpacity>
        )}
      </View>
      {errorMessage &&
        (errorMessageComponent ?? <FwkGenericText style={errorMessageStyle} text={errorMessage} />)}
    </View>
  );
};

export default FwkFileUploadInput;
