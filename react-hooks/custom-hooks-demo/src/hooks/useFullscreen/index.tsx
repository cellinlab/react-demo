import { useCallback } from 'react';
import screenfull from 'screenfull';

import { useLatest, useSafeState } from '../index';

import { getTarget } from '../utils';
import type {BasicTarget} from '../utils';

interface Options {
  onEnter?: () => void;
  onExit?: () => void;
}

const useFullscreen = (target: BasicTarget, options?: Options) => {
  const { onEnter, onExit } = options || {};

  const [isFullscreen, setIsFullscreen] = useSafeState(false);

  const onEnterRef = useLatest(onEnter);
  const onExitRef = useLatest(onExit);

  const onChange = () => {
    if (screenfull.isEnabled) {
      const ele = getTarget(target);
      if (!screenfull.element) {
        onExitRef.current?.();
        setIsFullscreen(false);
        screenfull.off('change', onChange);
      } else {
        const isFullscreen = screenfull.element === ele;
        if (isFullscreen) {
          onEnterRef.current?.();
        } else {
          onExitRef.current?.();
        }
        setIsFullscreen(isFullscreen);
      }
    }
  };

  const enterFullscreen = useCallback(() => {
    const ele = getTarget(target);

    if (!ele) return;

    if (screenfull.isEnabled) {
      screenfull.request(ele);
      screenfull.on('change', onChange);
    }
  }, []);

  const exitFullscreen = useCallback(() => {
    const ele = getTarget(target);

    if (screenfull.isEnabled && screenfull.element === ele) {
      screenfull.exit();
    }
  }, []);

  return {
    isFullscreen,
    isEnable: screenfull.isEnabled,
    enterFullscreen,
    exitFullscreen,
  };
};

export default useFullscreen;
