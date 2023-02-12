import {StyleSheet} from 'react-native';
import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import {TOAST_TYPES, useToasts} from '~/hooks/toasts/useToasts';

const translator = TRANSLATION_SCREENS.home.screens.toasts;

const ToastsScreen = () => {
  const {showToast} = useToasts();

  const buttons = [
    {
      label: translator.buttons.error,
      onPress: () =>
        showToast(TOAST_TYPES.error, translator.messages.error1, translator.messages.error2),
    },
    {
      label: translator.buttons.info,
      onPress: () =>
        showToast(TOAST_TYPES.info, translator.messages.info1, translator.messages.info2),
    },
    {
      label: translator.buttons.success,
      onPress: () =>
        showToast(TOAST_TYPES.success, translator.messages.success1, translator.messages.success2),
    },
    {
      label: translator.buttons.warning,
      onPress: () =>
        showToast(TOAST_TYPES.warning, translator.messages.warning1, translator.messages.warning2),
    },
  ];

  return (
    <AppScreenContainer>
      <>
        <GenericScreenHeader title={translator.header} />
        {buttons.map(button => (
          <PrimaryButton {...button} key={button.label} containerStyle={styles.button} />
        ))}
      </>
    </AppScreenContainer>
  );
};

export default ToastsScreen;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
