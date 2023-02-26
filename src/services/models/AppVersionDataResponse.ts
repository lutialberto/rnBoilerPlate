export interface AppVersionDataResponse {
  latestVersion: AppVersionResponse;
  minimumVersion: AppVersionResponse;
}

export interface AppVersionResponse {
  name: string;
  major: number;
  minor: number;
  patch: number;
}
