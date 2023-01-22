import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CopyIcon from '~/assets/svg/icons_copy.svg';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {ColorProps} from '~/hooks/theme/Models';

const App = () => {
  const {getColors, changeTheme} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  const changeToDarkTheme = () => changeTheme('dark');
  const changeToLightTheme = () => changeTheme('light');

  return (
    <View>
      <Text>App</Text>
      <CopyIcon style={styles.icon} />
      <TouchableOpacity onPress={changeToDarkTheme} style={styles.text}>
        <Text>Poner modo oscuro</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeToLightTheme} style={styles.text}>
        <Text>Poner modo claro</Text>
      </TouchableOpacity>
    </View>
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
