import {Linking} from 'react-native';

export const useAppStore = () => {
  const goToStore = () => {
    const packageName = 'com.google.android.apps.maps';
    const url = `market://details?id=${packageName}`;
    Linking.openURL(url);
  };

  return {goToStore};
};
