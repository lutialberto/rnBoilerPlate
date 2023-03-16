export interface ISessionState {
  email: string;
  isSignedIn?: boolean;
  isAppReady: boolean;
  restoreSessionFromStorage: () => void;
  login: (email: string) => void;
  logout: () => void;
}
