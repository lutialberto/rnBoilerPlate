import {Modal, Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CloseIcon from '~/assets/svg/icons_cross.svg';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {ColorProps} from '~/hooks/theme/Models';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import {IFwkGenericModalProps} from './IFwkGenericModalProps';

const FwkGenericModal = ({
  isVisible,
  onClose,
  children,
  childrenContainerStyle,
  visibleContainerStyle,
  mainContainerStyle,
  closeIconColor,
  transparentAreaBackgroundColor,
  animationType = 'fade',
}: IFwkGenericModalProps) => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  return (
    <Modal
      visible={isVisible}
      onDismiss={onClose}
      transparent
      animationType={animationType}
      onRequestClose={() => onClose()}>
      <View style={mainContainerStyle}>
        <Pressable
          style={[styles.transparentArea, {backgroundColor: transparentAreaBackgroundColor}]}
          onPress={onClose}
        />
        <View style={visibleContainerStyle}>
          <View style={childrenContainerStyle}>
            <TouchableOpacity style={styles.closeIconContainer} onPress={onClose}>
              <CloseIcon style={{color: closeIconColor}} />
            </TouchableOpacity>
            {children ? children : <PrimaryText text="GenericModal" />}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FwkGenericModal;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    transparentArea: {
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0.8,
    },
    visibleContainerBottomSheetType: {
      width: '100%',
    },
    closeIconContainer: {
      position: 'absolute',
      top: 0,
      right: 0,
    },
  });
};
