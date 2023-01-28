export interface IGenericScreenHeaderProps {
  title: string;
  showBackButton?: boolean;
  backButtonLabel?: string;
  onGoBack?: () => void;
  rightItems?: JSX.Element[];
}
