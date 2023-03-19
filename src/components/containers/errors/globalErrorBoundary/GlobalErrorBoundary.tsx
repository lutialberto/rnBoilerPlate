import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import RNRestart from 'react-native-restart';
import {useSessionState} from '~/hooks/sessionState/useSessionState';
import FwkErrorBoundary from '~/fwk/containers/errors/errorBoundary/FwkErrorBoundary';
import {TRANSLATOR} from '~/constants/Translator';
import ContactUsModal from './components/contactUsModal/ContactUsModal';

const translator = TRANSLATOR.components.errors.globalErrorBoundary;

const GlobalErrorBoundary = ({children}: {children: JSX.Element}) => {
  const [showModal, setShowModal] = useState(false);
  const {logout} = useSessionState();
  const handleBackToSignIn = async () => {
    logout();
    RNRestart.Restart();
  };

  return (
    <FwkErrorBoundary
      fallback={
        <AppScreenContainer>
          <View style={styles.infoContainer}>
            <PrimaryText text={translator.title} variant="title" style={styles.title} />
            <View style={styles.messageContainer}>
              <PrimaryText text={translator.message1} style={styles.message} />
              <PrimaryText text={translator.message2} style={styles.message} />
              <PrimaryText text={translator.message3} style={styles.message} />
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <PrimaryButton
              label={translator.restart}
              onPress={handleBackToSignIn}
              containerStyle={styles.button}
            />
            <PrimaryButton
              label={translator.contact}
              onPress={() => setShowModal(true)}
              containerStyle={styles.button}
              variant="secondary"
            />
          </View>
          <ContactUsModal showModal={showModal} onClose={() => setShowModal(false)} />
        </AppScreenContainer>
      }>
      {children}
    </FwkErrorBoundary>
  );
};

export default GlobalErrorBoundary;

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
  messageContainer: {
    marginTop: '10%',
    marginHorizontal: '5%',
  },
  message: {
    marginTop: '3%',
    textAlign: 'center',
  },
  buttonsContainer: {
    marginVertical: '20%',
    marginHorizontal: '15%',
  },
  button: {
    marginTop: '3%',
  },
});
