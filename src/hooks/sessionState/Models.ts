export interface ISessionState {
  email: string;
  isSignedIn?: boolean;
  isAppReady: boolean;
  restoreSessionFromStorage: (email: string) => void;
  login: (email: string) => void;
  logout: () => void;
}
