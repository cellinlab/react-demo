import { useCallback, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import { useUnmountedRef } from '../index';

function useSafeState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

function useSafeState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];

function useSafeState<S>(initialState?: S | (() => S)) {
  const unmountedRef: { current: boolean } = useUnmountedRef();

  const [state, setState] = useState(initialState);

  const setCurrentState = useCallback((currentState: any) => {
    if (unmountedRef.current) {
      console.warn('Can not set state on unmounted component');
      return;
    }
    setState(currentState);
  }, []);

  return [state, setCurrentState] as const;
}

export default useSafeState;
