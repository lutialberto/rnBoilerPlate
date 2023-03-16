import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import {TRANSLATION_BUTTONS, TRANSLATION_SCREENS} from '~/constants/Translator';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {IEmailVerificationScreenProps} from './IEmailVerificationScreenProps';
import OtpCodeValidationForm from '~/screens/home/screens/forms/screens/otpCodeValidation/components/otpCodeValidationForm/OtpCodeValidationForm';
import {OtpCodeValidationFormInputs} from '~/screens/home/screens/forms/screens/otpCodeValidation/models/OtpCodeValidationFormInputs';
import {IFormErrors} from '~/hooks/forms/Models';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import {useToasts} from '~/hooks/toasts/useToasts';
import {TOAST_TYPES} from '~/hooks/toasts/Models';
import {MainScreenNavigationType} from '~/navigation/MainStack';
import {ROUTE_PASSWORD_RECOVERY_CHANGE_PASSWORD} from '~/navigation/routes/NotSignedInRoutes';

const translator = TRANSLATION_SCREENS.welcome.screens.passwordRecovery.screens.emailVerification;

const EmailVerificationScreen = () => {
  const route = useRoute<RouteProp<{params: IEmailVerificationScreenProps}, 'params'>>();
  const {email} = route.params;
  const {showToast} = useToasts();
  const navigator = useNavigation<MainScreenNavigationType>();

  const onSuccess = (values: OtpCodeValidationFormInputs) => {
    if (values.code !== '1234') {
      showToast(TOAST_TYPES.error, translator.toast.title, translator.toast.message);
    } else {
      navigator.navigate(ROUTE_PASSWORD_RECOVERY_CHANGE_PASSWORD, {email});
    }
  };

  const onError = (
    values: OtpCodeValidationFormInputs,
    error: IFormErrors<OtpCodeValidationFormInputs>,
  ) => {};

  const handleResendCode = () => {};

  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <PrimaryText text={translator.message.replace('{{email}}', email)} />
      <View style={styles.formContainer}>
        <OtpCodeValidationForm onSuccess={onSuccess} onError={onError} />
        <PrimaryButton
          label={TRANSLATION_BUTTONS.resend}
          onPress={handleResendCode}
          variant="secondary"
          containerStyle={styles.buttonsContainer}
        />
      </View>
    </AppScreenContainer>
  );
};

export default EmailVerificationScreen;

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
