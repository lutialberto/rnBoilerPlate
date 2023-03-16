import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import {IFormErrors} from '~/hooks/forms/Models';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationType} from '~/navigation/MainStack';
import {ROUTE_LOGIN} from '~/navigation/routes/NotSignedInRoutes';
import {PersonalDataFormInputs} from './models/PersonalDataFormInputs';
import PersonalDataForm from './components/personalDataForm/PersonalDataForm';

const translator = TRANSLATION_SCREENS.welcome.screens.register.screens.personalData;

const PersonalDataScreen = () => {
  const navigator = useNavigation<MainScreenNavigationType>();

  const onSuccess = (values: PersonalDataFormInputs) => {
    navigator.navigate(ROUTE_LOGIN);
  };

  const onError = (
    values: PersonalDataFormInputs,
    error: IFormErrors<PersonalDataFormInputs>,
  ) => {};

  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <PrimaryText text={translator.message} />
      <View style={styles.formContainer}>
        <PersonalDataForm onSuccess={onSuccess} onError={onError} />
      </View>
    </AppScreenContainer>
  );
};

export default PersonalDataScreen;

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    justifyContent: 'center',
    flex: 1,
  },
});
