import Toast from 'react-native-toast-message';
import {ToastType} from './Models';

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
