import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import {TRANSLATION_BUTTONS, TRANSLATION_SCREENS} from '~/constants/Translator';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import LoginForm from '~/screens/home/screens/forms/screens/login/components/loginForm/LoginForm';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationType} from '~/navigation/MainStack';
import {ROUTE_PASSWORD_RECOVERY, ROUTE_REGISTER} from '~/navigation/routes/NotSignedInRoutes';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';

const translator = TRANSLATION_SCREENS.welcome.screens.login;

const LoginScreen = () => {
  const navigator = useNavigation<MainScreenNavigationType>();

  const onSuccess = () => {};
  const onError = () => {};

  const goToRegister = () => {
    navigator.navigate(ROUTE_REGISTER);
  };

  const goToPasswordRecovery = () => {
    navigator.navigate(ROUTE_PASSWORD_RECOVERY);
  };

  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.title} />
      <PrimaryText text={translator.message} />
      <View style={styles.formContainer}>
        <LoginForm
          onSuccess={onSuccess}
          onError={onError}
          handlePasswordRecovery={goToPasswordRecovery}
        />
        <PrimaryButton
          label={TRANSLATION_BUTTONS.register}
          onPress={goToRegister}
          variant="secondary"
          containerStyle={styles.buttonsContainer}
        />
      </View>
    </AppScreenContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    justifyContent: 'center',
    flex: 1,
  },
  buttonsContainer: {
    marginTop: 15,
  },
});
