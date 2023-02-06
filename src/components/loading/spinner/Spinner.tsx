import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {ColorProps} from '~/hooks/theme/Models';
import {ISpinnerProps} from './ISpinnerProps';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';

const Spinner = ({visible, color, style}: ISpinnerProps) => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator animating={visible} color={color ?? colors.primary} size="large" />
    </View>
  );
};

export default Spinner;

const getStyles = (_colors: ColorProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
