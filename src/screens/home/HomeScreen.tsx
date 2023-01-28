import {StyleSheet} from 'react-native';
import React from 'react';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationType} from '~/navigation/MainStack';
import {ROUTE_BUTTONS} from '~/navigation/routes/SignedInRoutes';

const translator = TRANSLATION_SCREENS.home;

const HomeScreen = () => {
  const navigator = useNavigation<MainScreenNavigationType>();
  return (
    <AppScreenContainer style={styles.container}>
      <PrimaryButton
        label={translator.buttons.buttons}
        containerStyle={styles.button}
        onPress={() => navigator.navigate(ROUTE_BUTTONS)}
      />
    </AppScreenContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 10,
  },
});
