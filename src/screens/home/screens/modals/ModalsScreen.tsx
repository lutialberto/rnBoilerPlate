import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import Card from '~/components/containers/card/Card';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import GenericBottomSheet from '~/components/containers/modals/genericBottomSheet/GenericBottomSheet';
import GenericModal from '~/components/containers/modals/genericModal/GenericModal';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import {TRANSLATION_SCREENS} from '~/constants/Translator';

const translator = TRANSLATION_SCREENS.home.screens.modals;

const ModalsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <Card>
        <PrimaryButton
          onPress={() => setModalVisible(true)}
          label={translator.showModal}
          containerStyle={styles.button}
        />
        <PrimaryButton
          onPress={() => setBottomSheetVisible(true)}
          label={translator.showBottomSheet}
          containerStyle={styles.button}
        />
      </Card>
      <GenericModal isVisible={modalVisible} onClose={() => setModalVisible(false)} />
      <GenericBottomSheet
        isVisible={bottomSheetVisible}
        onClose={() => setBottomSheetVisible(false)}
      />
    </AppScreenContainer>
  );
};

export default ModalsScreen;

const styles = StyleSheet.create({
  button: {
    marginVertical: 5,
  },
});
