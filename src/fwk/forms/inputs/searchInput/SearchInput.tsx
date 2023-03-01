import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useDimentions} from '~/hooks/useDimentions';
import {ColorProps} from '~/hooks/theme/Models';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {TRANSLATION_INPUTS} from '~/constants/Translator';
import {ISearchInputProps} from './ISearchInputProps';
import ClearInputIcon from '~/assets/svg/icons_clear.svg';
import SearchIcon from '~/assets/svg/icons_search.svg';

const {vw} = useDimentions();

const SearchInput = ({onChange}: ISearchInputProps) => {
  const [searchValue, setSearchValue] = useState('');
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  return (
    <View style={styles.inputContainer}>
      <SearchIcon style={{color: colors.fontColor, padding: 9}} />
      <TextInput
        value={searchValue}
        placeholder={TRANSLATION_INPUTS.search}
        placeholderTextColor={colors.fontColor}
        style={styles.input}
        onChangeText={value => {
          setSearchValue(value);
          onChange(value);
        }}
      />
      {searchValue !== '' && (
        <TouchableOpacity
          onPress={() => {
            setSearchValue('');
            onChange('');
          }}>
          <ClearInputIcon
            style={{
              color: colors.fontColor,
              padding: 9,
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.cardColor,
      borderRadius: vw * 3,
      borderWidth: 1,
      padding: vw,
    },
    input: {
      flex: 1,
      fontSize: vw * 4,
      paddingVertical: 0,
      color: colors.fontColor,
    },
  });
};
