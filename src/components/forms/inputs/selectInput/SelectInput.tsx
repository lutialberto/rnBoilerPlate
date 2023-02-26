import {StyleSheet} from 'react-native';
import React from 'react';
import FwkSelectInput from '~/fwk/forms/inputs/selectInput/FwkSelectInput';
import {IFwkSelectInputProps} from '~/fwk/forms/inputs/selectInput/IFwkSelectInputProps';
import {useDimentions} from '~/hooks/useDimentions';
import {ColorProps} from '~/hooks/theme/Models';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import ChevronDownIcon from '~/assets/svg/icons_chevron_down.svg';
import CrossIcon from '~/assets/svg/icons_cross.svg';
import {TRANSLATION_INPUTS} from '~/constants/Translator';

const {vw} = useDimentions();

const SelectInput = ({
  label = '',
  errorMessage = '',
  placeholder = TRANSLATION_INPUTS.selector,
  searchPlaceholder = TRANSLATION_INPUTS.search,
  textStyle,
  labelStyle,
  modalTitleStyle,
  errorMessageStyle,
  itemSeparatorStyle,
  dropDownPickerStyle,
  inputContainerStyle,
  searchContainerStyle,
  searchTextInputStyle,
  selectedItemLabelStyle,
  listParentContainerStyle,
  modalContentContainerStyle,
  ...props
}: IFwkSelectInputProps) => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  return (
    <FwkSelectInput
      {...props}
      placeholder={placeholder}
      searchPlaceholder={searchPlaceholder}
      inputContainerStyle={[styles.inputContainer, inputContainerStyle]}
      searchTextInputStyle={[styles.text, styles.search, searchTextInputStyle]}
      textStyle={[styles.text, textStyle]}
      modalTitleStyle={[styles.modalTitle, modalTitleStyle]}
      itemSeparatorStyle={[styles.itemSeparator, itemSeparatorStyle]}
      dropDownPickerStyle={[
        styles.input,
        errorMessage !== '' ? styles.inputInvalid : {},
        !props.enabled ? styles.inputDisabled : {},
      ]}
      searchContainerStyle={[styles.searchContainer, searchContainerStyle]}
      selectedItemLabelStyle={[styles.selectedItemLabel, selectedItemLabelStyle]}
      listParentContainerStyle={[
        {
          backgroundColor: colors.backgroundColor,
        },
        listParentContainerStyle,
      ]}
      modalContentContainerStyle={[styles.modalContentContainer, modalContentContainerStyle]}
      labelComponent={
        props.labelComponent ?? <PrimaryText text={label} style={labelStyle} variant="label" />
      }
      errorMessageComponent={
        props.errorMessageComponent ?? (
          <PrimaryText text={errorMessage} style={errorMessageStyle} variant="errorMessage" />
        )
      }
      arrowDownIconComponent={<ChevronDownIcon style={{color: colors.fontColor}} />}
      closeIconComponent={<CrossIcon style={{color: colors.fontColor}} />}
    />
  );
};

export default SelectInput;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      borderWidth: 0,
      padding: 0,
      borderBottomWidth: 1,
      borderBottomColor: colors.fontColor,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      backgroundColor: 'transparent',
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
    modalContentContainer: {
      paddingHorizontal: 10,
      backgroundColor: colors.backgroundColor,
    },
    modalTitle: {
      color: colors.fontColor,
      fontFamily: 'Arial',
      fontWeight: '700',
      fontSize: vw * 6,
      textAlign: 'center',
    },
    itemSeparator: {
      backgroundColor: colors.fontColor,
    },
    selectedItemLabel: {
      fontFamily: 'Arial',
      fontWeight: '500',
      color: colors.primary,
      fontSize: vw * 4,
    },
    text: {
      fontFamily: 'Arial',
      fontWeight: '500',
      color: colors.fontColor,
      fontSize: vw * 4,
    },
    arrow: {
      color: colors.fontColor,
    },
    searchContainer: {
      borderBottomWidth: 0,
    },
    search: {
      borderWidth: 0,
      backgroundColor: colors.cardColor,
    },
  });
};
