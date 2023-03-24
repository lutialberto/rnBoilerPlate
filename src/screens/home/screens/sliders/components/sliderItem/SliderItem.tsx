import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ISliderItemProps} from './ISliderItemProps';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import {ColorProps} from '~/hooks/theme/Models';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';

const SliderItem = ({text}: ISliderItemProps) => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  return (
    <View style={styles.slide}>
      <PrimaryText text={text} variant="title" />
    </View>
  );
};

export default SliderItem;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.backgroundColor,
      borderWidth: 2,
      borderColor: colors.fontColor,
      borderRadius: 30,
      marginHorizontal: '5%',
      marginBottom: '15%',
    },
  });
};
