import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CopyIcon from '~/assets/svg/icons_copy.svg';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {ColorProps} from '~/hooks/theme/Models';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import {TRANSLATION_SCREENS} from '~/constants/Translator';

const translator = TRANSLATION_SCREENS.app;

const App = () => {
  const {getColors, changeTheme} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  const changeToDarkTheme = () => changeTheme('dark');
  const changeToLightTheme = () => changeTheme('light');

  return (
    <AppScreenContainer>
      <PrimaryText text={translator.title} />
      <CopyIcon style={styles.icon} />
      <TouchableOpacity onPress={changeToDarkTheme}>
        <PrimaryText text={translator.dark} />
      </TouchableOpacity>
      <TouchableOpacity onPress={changeToLightTheme}>
        <PrimaryText text={translator.light} />
      </TouchableOpacity>
    </AppScreenContainer>
  );
};

export default App;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    icon: {
      color: colors.fontColor,
    },
  });
};
