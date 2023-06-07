import { useEffect } from 'react';

import { useLatest } from '../index'

const useEventListener = (
  event: string,
  handler: (...e: any) => void,
  target?: any
) => {
  const handlerRef = useLatest(handler);

  useEffect(() => {
    let targetElement: any;
    if (!target) {
      targetElement = window;
    } else if ('current' in target) {
      targetElement = target.current;
    } else {
      targetElement = target;
    }

    if (!targetElement?.addEventListener) {
      return;
    }

    const useEventListener = (event: Event) => {
      return handlerRef.current(event);
    };

    targetElement.addEventListener(event, useEventListener);

    return () => {
      targetElement.removeEventListener(event, useEventListener);
    };
  }, [event, target]);
};

export default useEventListener;
