import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {IFwkSelectInputProps} from './IFwkSelectInputProps';
import FwkGenericText from '~/fwk/texts/genericText/FwkGenericText';
import DropDownPicker from 'react-native-dropdown-picker';

const FwkSelectInput = ({
  label = '',
  labelComponent,
  labelStyle,
  errorMessage = '',
  errorMessageComponent,
  errorMessageStyle,
  placeholder,
  value,
  options,
  onChange,
  enabled = true,
  enableSearchBar = false,
  inputContainerStyle,
  dropDownPickerStyle,
  modalContentContainerStyle,
  modalTitleStyle,
  itemSeparatorStyle,
  selectedItemLabelStyle,
  listParentContainerStyle,
  arrowDownIconComponent,
  closeIconComponent,
  textStyle,
  searchTextInputStyle,
  searchPlaceholder,
  searchPlaceholderTextColor,
  searchContainerStyle,
}: IFwkSelectInputProps) => {
  const [open, setOpen] = useState(false);
  return (
    <View>
      {labelComponent ?? <FwkGenericText text={label} style={labelStyle} />}
      <View style={inputContainerStyle}>
        <DropDownPicker
          items={options}
          schema={{
            label: 'label',
            value: 'value',
          }}
          open={open}
          setOpen={setOpen}
          value={value}
          onSelectItem={item => {
            onChange(item.value);
          }}
          setValue={(callback: any) => onChange(callback())}
          placeholder={placeholder}
          disableBorderRadius={true}
          style={dropDownPickerStyle}
          listMode="MODAL"
          modalContentContainerStyle={modalContentContainerStyle}
          listParentContainerStyle={listParentContainerStyle}
          modalTitle={placeholder}
          modalTitleStyle={modalTitleStyle}
          itemSeparator={true}
          itemSeparatorStyle={itemSeparatorStyle}
          selectedItemLabelStyle={selectedItemLabelStyle}
          textStyle={textStyle}
          showTickIcon={false}
          ArrowDownIconComponent={() => arrowDownIconComponent ?? <Text>Toggle</Text>}
          CloseIconComponent={() => closeIconComponent ?? <Text>Close</Text>}
          searchContainerStyle={searchContainerStyle}
          searchable={enableSearchBar}
          searchPlaceholder={searchPlaceholder}
          searchPlaceholderTextColor={searchPlaceholderTextColor}
          searchTextInputStyle={searchTextInputStyle}
        />
      </View>
      {errorMessageComponent ?? <FwkGenericText style={errorMessageStyle} text={errorMessage} />}
    </View>
  );
};

export default FwkSelectInput;
