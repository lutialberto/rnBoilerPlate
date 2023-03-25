import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import {useToasts} from '~/hooks/toasts/useToasts';
import {useBiometricAuth} from '~/hooks/biometricAuth/useBiometricAuth';

const translator = TRANSLATION_SCREENS.home.screens.biometricAuth;

const BiometricAuthScreen = () => {
  const {showToast} = useToasts();
  const {isSupportedByDevice, authenticate} = useBiometricAuth();

  useEffect(() => {
    if (isSupportedByDevice !== undefined && !isSupportedByDevice) {
      showToast('warning', translator.toast.notSupported);
    }
  }, [isSupportedByDevice]);

  const handleAuthenticate = () => {
    authenticate(
      results => {
        if (results.success) {
          showToast('success', translator.toast.success);
        } else if (results.error === 'unknown') {
          showToast('info', translator.toast.disabled);
        } else if (
          results.error === 'user_cancel' ||
          results.error === 'system_cancel' ||
          results.error === 'app_cancel'
        ) {
          showToast('info', translator.toast.cancelled);
        }
      },
      () => showToast('error', translator.toast.error),
    );
  };

  return (
    <AppScreenContainer>
      <>
        <GenericScreenHeader title={translator.header} />
        {isSupportedByDevice && (
          <PrimaryButton onPress={handleAuthenticate} label={'Authenticate'} />
        )}
      </>
    </AppScreenContainer>
  );
};

export default BiometricAuthScreen;

const styles = StyleSheet.create({});
