import {StyleSheet, View} from 'react-native';
import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {IChangePasswordScreenProps} from './IChangePasswordScreenProps';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import ChangePasswordForm from '~/screens/home/screens/forms/screens/changePassword/components/changePasswordForm/ChangePasswordForm';
import {ChangePasswordFormInputs} from '~/screens/home/screens/forms/screens/changePassword/models/ChangePasswordFormInputs';
import {IFormErrors} from '~/hooks/forms/Models';
import {MainScreenNavigationType} from '~/navigation/MainStack';
import {ROUTE_LOGIN} from '~/navigation/routes/NotSignedInRoutes';

const translator = TRANSLATION_SCREENS.welcome.screens.passwordRecovery.screens.changePassword;

const ChangePasswordScreen = () => {
  const route = useRoute<RouteProp<{params: IChangePasswordScreenProps}, 'params'>>();
  const {email} = route.params;
  const navigator = useNavigation<MainScreenNavigationType>();

  const onSuccess = (values: ChangePasswordFormInputs) => {
    navigator.navigate(ROUTE_LOGIN);
  };

  const onError = (
    values: ChangePasswordFormInputs,
    error: IFormErrors<ChangePasswordFormInputs>,
  ) => {};

  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <PrimaryText text={translator.message.replace('{{email}}', email)} />
      <View style={styles.formContainer}>
        <ChangePasswordForm onSuccess={onSuccess} onError={onError} />
      </View>
    </AppScreenContainer>
  );
};

export default ChangePasswordScreen;

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
