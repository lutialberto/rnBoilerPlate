import {StyleSheet, View} from 'react-native';
import React from 'react';
import GenericModal from '~/components/containers/modals/genericModal/GenericModal';
import {IMockFormsModalProps} from './IMockFormsModalProps';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationType} from '~/navigation/MainStack';
import {
  ROUTE_FORMS_CHANGE_PASSWORD,
  ROUTE_FORMS_LOGIN,
  ROUTE_FORMS_OTP_CODE_VALIDATION,
  ROUTE_FORMS_REGISTER,
} from '~/navigation/routes/SignedInRoutes';
import {TRANSLATION_SCREENS} from '~/constants/Translator';

const MockFormsModal = ({isVisible, onClose}: IMockFormsModalProps) => {
  const navigator = useNavigation<MainScreenNavigationType>();
  const translator = TRANSLATION_SCREENS.home.screens.forms.forms;

  const forms = [
    {label: translator.login.goToLabel, onPress: () => navigator.navigate(ROUTE_FORMS_LOGIN)},
    {label: translator.register.goToLabel, onPress: () => navigator.navigate(ROUTE_FORMS_REGISTER)},
    {
      label: translator.changePassword.goToLabel,
      onPress: () => navigator.navigate(ROUTE_FORMS_CHANGE_PASSWORD),
    },
    {
      label: translator.otpCodeValidation.goToLabel,
      onPress: () => navigator.navigate(ROUTE_FORMS_OTP_CODE_VALIDATION),
    },
  ];

  return (
    <GenericModal
      isVisible={isVisible}
      onClose={onClose}
      children={
        <View>
          {forms.map(form => (
            <PrimaryButton
              key={form.label}
              onPress={() => {
                form.onPress();
                onClose();
              }}
              label={form.label}
              containerStyle={styles.button}
            />
          ))}
        </View>
      }
    />
  );
};

export default MockFormsModal;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
