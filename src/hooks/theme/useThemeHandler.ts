import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import EncryptedStorage from 'react-native-encrypted-storage';
import {ColorProps} from './Models';
import {NONE_THEME_PROPS, THEMES_PROPS} from './Contants';
import {STORAGE_KEY_PREFIX} from '~/constants/State';

export type ITheme = 'light' | 'dark';

export interface IThemeState {
  selectedTheme: ITheme;
  themeOptions: ITheme[];
  getColors: () => ColorProps;
  changeTheme: (newTheme: ITheme) => void;
}

export const useThemeHandler = create<IThemeState>()(
  persist(
    (set, get) => ({
      selectedTheme: 'light',
      themeOptions: ['dark', 'light'],
      getColors: () => {
        const currentTheme = get().selectedTheme;
        const themeProps = THEMES_PROPS[currentTheme];
        const colors = {...NONE_THEME_PROPS, ...themeProps};
        return colors;
      },
      changeTheme: (newTheme: ITheme) => set(() => ({selectedTheme: newTheme})),
    }),
    {
      name: STORAGE_KEY_PREFIX + '-theme-storage',
      storage: createJSONStorage(() => EncryptedStorage),
      version: 1,
    },
  ),
);
