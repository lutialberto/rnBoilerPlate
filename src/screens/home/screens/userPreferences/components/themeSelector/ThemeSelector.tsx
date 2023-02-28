import React from 'react';
import SelectInput from '~/components/forms/inputs/selectInput/SelectInput';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';

const translator = TRANSLATION_SCREENS.home.screens.userPreferences;

const ThemeSelector = () => {
  const {selectedTheme, themeOptions, changeTheme} = useThemeHandler();
  return (
    <SelectInput
      label={translator.themeLabel}
      onChange={newTheme => changeTheme(newTheme)}
      options={themeOptions.map(theme => ({label: theme, value: theme}))}
      value={selectedTheme}
    />
  );
};

export default ThemeSelector;
