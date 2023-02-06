import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import {ColorProps} from '~/hooks/theme/Models';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import HideableText from '~/components/texts/hideableText/HideableText';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';

const translator = TRANSLATION_SCREENS.home.screens.texts;

const TextsScreen = () => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  const [hiddenText, setHiddenText] = useState(true);

  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <PrimaryText text={translator.generic} />
      <PrimaryText text={translator.title} variant="title" />
      <PrimaryText text={translator.error} variant="errorMessage" />
      <PrimaryText text={translator.label} variant="label" />
      <PrimaryText text={'123,123'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <HideableText
          hiddenText={hiddenText}
          text={translator.hideableText}
          regex="123"
          replaceWith="***"
        />
        <PrimaryButton
          onPress={() => setHiddenText(prev => !prev)}
          label={hiddenText ? translator.show : translator.hide}
        />
      </View>
    </AppScreenContainer>
  );
};

export default TextsScreen;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({});
};
