import {useEffect, useState} from 'react';
import {VERSION} from '~/constants/EnvConfig';
import {AppVersionDataResponse, AppVersionResponse} from '~/services/models/AppVersionDataResponse';

export const useAppVersion = (fetchAppVersionData: () => Promise<AppVersionDataResponse>) => {
  const [appVersionState, setappVersionState] = useState({
    mustUpdate: false,
    canUpdate: false,
    latestVersion: {
      name: '-1.-1.-1',
      major: -1,
      minor: -1,
      patch: -1,
    },
    minimumVersion: {
      name: '-1.-1.-1',
      major: -1,
      minor: -1,
      patch: -1,
    },
  });

  const mustUpdateApp = (minimumVersion: AppVersionResponse) => {
    const {major: currentMajor, minor: currentMinor, patch: currentPatch} = VERSION;
    const {major: minMajor, minor: minMinor, patch: minPatch} = minimumVersion;
    if (minMajor > currentMajor) return true;
    if (minMinor > currentMinor) return true;
    if (minPatch > currentPatch) return true;
    return false;
  };

  const canUpdateApp = (latestVersion: AppVersionResponse) => {
    const {major: currentMajor, minor: currentMinor, patch: currentPatch} = VERSION;
    const {major: maxMajor, minor: maxMinor, patch: maxPatch} = latestVersion;
    if (maxMajor > currentMajor) return true;
    if (maxMinor > currentMinor) return true;
    if (maxPatch > currentPatch) return true;
    return false;
  };

  const fetchData = async () => {
    fetchAppVersionData().then(({latestVersion, minimumVersion}) => {
      const mustUpdate = mustUpdateApp(minimumVersion);
      const canUpdate = canUpdateApp(latestVersion);
      setappVersionState({
        mustUpdate,
        canUpdate,
        latestVersion,
        minimumVersion,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return appVersionState;
};
