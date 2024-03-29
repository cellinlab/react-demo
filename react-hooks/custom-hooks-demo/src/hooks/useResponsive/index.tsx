import {useSafeState, useEventListener} from '../index';

import { isBrowser } from '../utils';

type ResponsiveConfig = Record<string, number>;
type ResponsiveInfo = Record<string, boolean>;

let responsiveConfig: ResponsiveConfig = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

let info: ResponsiveInfo = {};

export const configResponsive = (config: ResponsiveConfig) => {
  responsiveConfig = config;
}

const clac = () => {
  const width = window.innerWidth;
  const newInfo = {} as ResponsiveInfo;
  let shouldUpdate = false;
  for (const k of Object.keys(responsiveConfig)) {
    newInfo[k] = width >= responsiveConfig[k];
    if (info[k] !== newInfo[k]) {
      shouldUpdate = true;
    }
  }
  if (shouldUpdate) {
    info = newInfo;
  }

  return {
    shouldUpdate,
    info,
  };
};

const useResonsive = () => {
  if (isBrowser) {
    clac();
  }

  const [state, setState] = useSafeState<ResponsiveInfo>(() => clac().info);

  useEventListener('resize', () => {
    const res = clac();
    if (res.shouldUpdate) {
      setState(res.info);
    }
  });

  return state;
};

export default useResonsive;
