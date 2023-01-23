import {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useCheckInternetConnection = () => {
  const [isConnected, setIsconnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsconnected(prev => state.isConnected ?? prev);
    });

    return () => unsubscribe();
  }, []);

  return {isConnected};
};
