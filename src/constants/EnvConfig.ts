import Config from 'react-native-config';

export const ENV: string = Config.ENV ?? 'prod';

export const ENVS = {
  dev: 'dev',
  qa: 'qa',
  prod: 'prod',
};

const [major, minor, patch] = Config.VERSION_NAME?.split('.') ?? [];
export const VERSION = {
  name: Config.VERSION_NAME,
  major: +(major ?? -1),
  minor: +(minor ?? -1),
  patch: +(patch ?? -1),
};

export const BUILD = Config.VERSION_CODE;
