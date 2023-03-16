import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TRANSLATION_BUTTONS, TRANSLATION_SCREENS} from '~/constants/Translator';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {IEmailVerificationScreenProps} from './IEmailVerificationScreenProps';
import {useToasts} from '~/hooks/toasts/useToasts';
import {MainScreenNavigationType} from '~/navigation/MainStack';
import {OtpCodeValidationFormInputs} from '~/screens/home/screens/forms/screens/otpCodeValidation/models/OtpCodeValidationFormInputs';
import {TOAST_TYPES} from '~/hooks/toasts/Models';
import {IFormErrors} from '~/hooks/forms/Models';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import OtpCodeValidationForm from '~/screens/home/screens/forms/screens/otpCodeValidation/components/otpCodeValidationForm/OtpCodeValidationForm';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import {ROUTE_REGISTER_CREATE_PASSWORD} from '~/navigation/routes/NotSignedInRoutes';

const translator = TRANSLATION_SCREENS.welcome.screens.passwordRecovery.screens.emailVerification;

const EmailVerificationRegisterScreen = () => {
  const route = useRoute<RouteProp<{params: IEmailVerificationScreenProps}, 'params'>>();
  const {email} = route.params;
  const {showToast} = useToasts();
  const navigator = useNavigation<MainScreenNavigationType>();

  const onSuccess = (values: OtpCodeValidationFormInputs) => {
    if (values.code !== '1234') {
      showToast(TOAST_TYPES.error, translator.toast.title, translator.toast.message);
    } else {
      navigator.navigate(ROUTE_REGISTER_CREATE_PASSWORD);
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

export default EmailVerificationRegisterScreen;

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
