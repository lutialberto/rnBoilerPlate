import EncryptedStorage from 'react-native-encrypted-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {ENV} from '~/constants/EnvConfig';
import {STORAGE_KEY_PREFIX} from '~/constants/State';
import {ISessionState} from './Models';

const NO_EMAIL = '';

export const useSessionState = create<ISessionState>()(
  persist(
    set => ({
      email: NO_EMAIL,
      isSignedIn: undefined,
      isAppReady: false,
      restoreSessionFromStorage: email =>
        set(() => ({
          email,
          isSignedIn: email !== NO_EMAIL,
          isAppReady: true,
        })),
      login: email => set(() => ({email, isSignedIn: true})),
      logout: () => set(() => ({email: NO_EMAIL, isSignedIn: false})),
    }),
    {
      name: `${STORAGE_KEY_PREFIX}-${ENV}-session-storage`,
      storage: createJSONStorage(() => EncryptedStorage),
    },
  ),
);
