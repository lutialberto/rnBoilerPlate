import {StyleSheet} from 'react-native';
import React from 'react';
import FwkGenericModal from '~/fwk/containers/modals/genericModal/FwkGenericModal';
import {IFwkGenericModalProps} from '~/fwk/containers/modals/genericModal/IFwkGenericModalProps';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {ColorProps} from '~/hooks/theme/Models';
import {useDimentions} from '~/hooks/useDimentions';

const {vw, vh} = useDimentions();

const GenericModal = ({
  mainContainerStyle,
  visibleContainerStyle,
  childrenContainerStyle,
  ...props
}: IFwkGenericModalProps) => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  return (
    <FwkGenericModal
      {...props}
      mainContainerStyle={[styles.container, mainContainerStyle]}
      visibleContainerStyle={[styles.visibleContainer, visibleContainerStyle]}
      childrenContainerStyle={[styles.childrenContainer, childrenContainerStyle]}
      closeIconColor={colors.fontColor}
      transparentAreaBackgroundColor={colors.lowOpacityColor}
    />
  );
};

export default GenericModal;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    visibleContainer: {
      width: vw * 75,
      height: vh * 60,
      backgroundColor: colors.backgroundColor,
      borderRadius: vw * 6,
      padding: vw * 4,
    },
    childrenContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
