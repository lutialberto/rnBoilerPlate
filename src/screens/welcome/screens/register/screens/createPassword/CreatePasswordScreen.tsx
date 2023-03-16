import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import ChangePasswordForm from '~/screens/home/screens/forms/screens/changePassword/components/changePasswordForm/ChangePasswordForm';
import {IFormErrors} from '~/hooks/forms/Models';
import {ChangePasswordFormInputs} from '~/screens/home/screens/forms/screens/changePassword/models/ChangePasswordFormInputs';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationType} from '~/navigation/MainStack';
import {ROUTE_REGISTER_PERSONAL_DATA} from '~/navigation/routes/NotSignedInRoutes';

const translator = TRANSLATION_SCREENS.welcome.screens.register.screens.createPassword;

const CreatePasswordScreen = () => {
  const navigator = useNavigation<MainScreenNavigationType>();

  const onSuccess = (values: ChangePasswordFormInputs) => {
    navigator.navigate(ROUTE_REGISTER_PERSONAL_DATA);
  };

  const onError = (
    values: ChangePasswordFormInputs,
    error: IFormErrors<ChangePasswordFormInputs>,
  ) => {};

  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <PrimaryText text={translator.message} />
      <View style={styles.formContainer}>
        <ChangePasswordForm onSuccess={onSuccess} onError={onError} />
      </View>
    </AppScreenContainer>
  );
};

export default CreatePasswordScreen;

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    justifyContent: 'center',
    flex: 1,
  },
});
