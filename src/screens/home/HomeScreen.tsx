import {StyleSheet} from 'react-native';
import React from 'react';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationType} from '~/navigation/MainStack';
import {
  ROUTE_BUTTONS,
  ROUTE_FORMS,
  ROUTE_LOADING,
  ROUTE_MODALS,
  ROUTE_TEXTS,
  ROUTE_TOASTS,
} from '~/navigation/routes/SignedInRoutes';

const translator = TRANSLATION_SCREENS.home;

const HomeScreen = () => {
  const navigator = useNavigation<MainScreenNavigationType>();

  const buttons = [
    {
      label: translator.buttons.buttons,
      onPress: () => navigator.navigate(ROUTE_BUTTONS),
    },
    {
      label: translator.buttons.texts,
      onPress: () => navigator.navigate(ROUTE_TEXTS),
    },
    {
      label: translator.buttons.loading,
      onPress: () => navigator.navigate(ROUTE_LOADING),
    },
    {
      label: translator.buttons.modals,
      onPress: () => navigator.navigate(ROUTE_MODALS),
    },
    {
      label: translator.buttons.toasts,
      onPress: () => navigator.navigate(ROUTE_TOASTS),
    },
    {
      label: translator.buttons.forms,
      onPress: () => navigator.navigate(ROUTE_FORMS),
    },
  ];

  return (
    <AppScreenContainer style={styles.container}>
      {buttons.map(button => (
        <PrimaryButton
          key={button.label}
          label={button.label}
          onPress={button.onPress}
          containerStyle={styles.button}
        />
      ))}
    </AppScreenContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
