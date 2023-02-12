import Toast from 'react-native-toast-message';

export const TOAST_TYPES = {
  error: 'error' as ToastType,
  success: 'success' as ToastType,
  info: 'info' as ToastType,
  warning: 'warning' as ToastType,
};

export type ToastType = 'error' | 'success' | 'info' | 'warning';

export const useToasts = () => {
  const showToast = (
    type: ToastType,
    title: string,
    message?: string,
    onPress: () => void = () => {},
  ) => {
    Toast.show({
      type: type,
      text1: title,
      text2: message,
      onPress,
    });
  };

  return {showToast};
};
