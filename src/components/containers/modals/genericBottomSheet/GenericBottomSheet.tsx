import {StyleSheet} from 'react-native';
import React from 'react';
import GenericModal from '../genericModal/GenericModal';
import {useDimentions} from '~/hooks/useDimentions';
import {IFwkGenericModalProps} from '~/fwk/containers/modals/genericModal/IFwkGenericModalProps';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';

const {vw} = useDimentions();

const GenericBottomSheet = ({
  isVisible,
  onClose,
  children,
  childrenContainerStyle,
  visibleContainerStyle,
}: IFwkGenericModalProps) => {
  return (
    <GenericModal
      isVisible={isVisible}
      onClose={onClose}
      mainContainerStyle={styles.mainContainer}
      visibleContainerStyle={[styles.visibleContainer, visibleContainerStyle]}
      childrenContainerStyle={childrenContainerStyle}>
      {children ?? <PrimaryText text="GenericModal" />}
    </GenericModal>
  );
};

export default GenericBottomSheet;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'flex-end',
  },
  visibleContainer: {
    width: 100 * vw,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
  },
});
