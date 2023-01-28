import {StyleSheet} from 'react-native';
import React from 'react';
import FwkGenericButton from '~/fwk/buttons/genericButton/FwkGenericButton';
import {ColorProps} from '~/hooks/theme/Models';
import {useDimentions} from '~/hooks/useDimentions';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import {IPrimaryButtonProps} from './IPrimaryButtonProps';

const {vw} = useDimentions();

const PrimaryButton = ({
  variant = 'default',
  enabled = true,
  containerStyle,
  labelStyle,
  labelComponent,
  ...props
}: IPrimaryButtonProps) => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);

  const getContainerStyle = () => {
    const containerStyles = {
      default: [
        styles.defaultContainer,
        containerStyle,
        !enabled && styles.defaultDisabledContainer,
      ],
      secondary: [
        styles.defaultContainer,
        containerStyle,
        styles.secondaryContainer,
        !enabled && styles.secondaryDisabledContainer,
      ],
      secondaryNoBorder: [
        styles.defaultContainer,
        containerStyle,
        styles.secondaryContainer,
        styles.seCondaryNoBorderContainer,
        !enabled && styles.secondaryDisabledContainer,
      ],
    };

    return containerStyles[variant];
  };

  const getLabelStyle = () => {
    const labelStyles = {
      default: [styles.defaultLabel, labelStyle],
      secondary: [
        styles.defaultLabel,
        labelStyle,
        styles.secondaryLabel,
        !enabled && styles.secondaryDisabledLabel,
      ],
      secondaryNoBorder: [
        styles.defaultLabel,
        labelStyle,
        styles.secondaryLabel,
        !enabled && styles.secondaryDisabledLabel,
      ],
    };

    return labelStyles[variant];
  };

  return (
    <FwkGenericButton
      {...props}
      enabled={enabled}
      containerStyle={getContainerStyle()}
      labelStyle={getLabelStyle()}
      labelComponent={
        labelComponent ?? <PrimaryText text={props.label ?? ''} style={getLabelStyle()} />
      }
    />
  );
};

export default PrimaryButton;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    defaultContainer: {
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: vw * 10,
      paddingVertical: vw * 2,
      paddingHorizontal: vw * 3,
      flexDirection: 'row',
      marginHorizontal: vw * 25,
    },
    defaultDisabledContainer: {
      backgroundColor: colors.disabledColor,
    },
    defaultLabel: {
      marginLeft: vw,
      textAlign: 'center',
    },
    secondaryContainer: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.primary,
    },
    secondaryDisabledContainer: {
      borderColor: colors.disabledColor,
    },
    secondaryLabel: {
      color: colors.primary,
    },
    secondaryDisabledLabel: {
      color: colors.disabledColor,
    },
    seCondaryNoBorderContainer: {
      borderWidth: 0,
    },
  });
};
