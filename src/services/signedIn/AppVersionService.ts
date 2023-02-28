import {AppVersionDataResponse} from '../models/AppVersionDataResponse';

export const getAppVersionData = async (): Promise<AppVersionDataResponse> => {
  return await require('~/services/mockResponses/last-version.json');
};
