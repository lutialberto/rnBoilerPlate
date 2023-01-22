import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CopyIcon from '~/assets/svg/icons_copy.svg';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {ColorProps} from '~/hooks/theme/Models';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';

const App = () => {
  const {getColors, changeTheme} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  const changeToDarkTheme = () => changeTheme('dark');
  const changeToLightTheme = () => changeTheme('light');

  return (
    <AppScreenContainer>
      <Text>App</Text>
      <CopyIcon style={styles.icon} />
      <TouchableOpacity onPress={changeToDarkTheme} style={styles.text}>
        <Text>Poner modo oscuro</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeToLightTheme} style={styles.text}>
        <Text>Poner modo claro</Text>
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
    text: {
      padding: 10,
      borderWidth: 1,
      borderColor: colors.fontColor,
    },
  });
};
