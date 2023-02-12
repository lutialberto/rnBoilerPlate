import React from 'react';
import Toast, {BaseToast} from 'react-native-toast-message';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';

const FwkGenericToast = () => {
  const {getColors} = useThemeHandler();
  const colors = getColors();

  return (
    <Toast
      config={{
        warning: props => <BaseToast {...props} style={{borderLeftColor: colors.yellow}} />,
      }}
    />
  );
};

export default FwkGenericToast;
