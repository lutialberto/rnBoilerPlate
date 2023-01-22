import {NoneThemeProps, ThemeProps} from './Models';

const red = '#F5333F';
const gray = '#969696';
const blue = '#0186FF';
const orange = '#FF881A';
const green = '#1FDE6B';
const yellow = '#FFCD00';
const white = '#FFFFFF';
const black = '#222222';
const ultraBlack = '#010101';

export const THEME_DARK: ThemeProps = {
  primary: blue,
  fontColor: white,
  backgroundColor: black,
  cardColor: '#181818',
  disabledColor: gray,
  lowOpacityColor: white,
};
export const THEME_LIGHT: ThemeProps = {
  primary: blue,
  fontColor: black,
  backgroundColor: white,
  cardColor: '#D8D8D8',
  disabledColor: gray,
  lowOpacityColor: black,
};
export const THEMES_PROPS = {
  dark: THEME_DARK,
  light: THEME_LIGHT,
};
export const NONE_THEME_PROPS: NoneThemeProps = {
  red,
  gray,
  blue,
  orange,
  green,
  yellow,
  white,
  black,
  ultraBlack,
};
