export interface NoneThemeProps {
  red: string;
  gray: string;
  blue: string;
  orange: string;
  green: string;
  yellow: string;
  white: string;
  black: string;
  ultraBlack: string;
}
export interface ThemeProps {
  primary: string;
  fontColor: string;
  backgroundColor: string;
  cardColor: string;
  disabledColor: string;
  lowOpacityColor: string;
}
export interface ColorProps extends NoneThemeProps, ThemeProps {}
