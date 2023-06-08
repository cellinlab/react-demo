import {useSafeState, useEventListener} from '../index';

import { isBrowser } from '../utils';

type VisibilityProps = 'hidden' | 'visible' | undefined;

const getVisibility = () => {
  if (!isBrowser) return 'visible';
  return document.visibilityState;
};

const useDocumentVisibility = (): VisibilityProps => {
  const [visibility, setVisibility] = useSafeState<VisibilityProps>(() => getVisibility());

  useEventListener(
    'visibilitychange',
    () => {
      setVisibility(getVisibility());
    },
    document,
  );

  return visibility;
};

export default useDocumentVisibility;
