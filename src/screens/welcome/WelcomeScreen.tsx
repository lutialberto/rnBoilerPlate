import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationType} from '~/navigation/MainStack';
import {ROUTE_LOGIN, ROUTE_REGISTER} from '~/navigation/routes/NotSignedInRoutes';

const translator = TRANSLATION_SCREENS.welcome;

const WelcomeScreen = () => {
  const navigator = useNavigation<MainScreenNavigationType>();

  const goToLogin = () => navigator.navigate(ROUTE_LOGIN);

  const goToRegister = () => navigator.navigate(ROUTE_REGISTER);

  return (
    <AppScreenContainer style={styles.screenContainer}>
      <View style={styles.title}>
        <PrimaryText text={translator.title} variant="title" />
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButton label={translator.buttons.login} onPress={goToLogin} />
        <PrimaryButton
          label={translator.buttons.register}
          onPress={goToRegister}
          variant="secondary"
        />
      </View>
    </AppScreenContainer>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 5,
    justifyContent: 'center',
  },
  buttonsContainer: {
    justifyContent: 'space-evenly',
    flex: 1,
    width: '100%',
    paddingHorizontal: '20%',
  },
});
