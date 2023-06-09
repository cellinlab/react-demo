import { useEffect } from 'react';
import dayjs from 'dayjs';

import {useSafeState, useCreation, useLatest} from '../index';

type TDate = dayjs.ConfigType;

interface Options {
  targetDate?: TDate; // 目标时间
  interval?: number; // 间隔时间
  onEnd?: () => void; // 结束回调
  targetTime?: number; // 剩余时间
};

interface FormattedRes {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
};

const calcRemain = (targetDate?: TDate) => {
  if (!targetDate) return 0;
  const remain = dayjs(targetDate).valueOf() - Date.now();
  return remain > 0 ? remain : 0;
};

const calcFormat = (milliseconds: number): FormattedRes => {
  return {
    days: Math.floor(milliseconds / 1000 / 60 / 60 / 24),
    hours: Math.floor(milliseconds / 1000 / 60 / 60) % 24,
    minutes: Math.floor(milliseconds / 1000 / 60) % 60,
    seconds: Math.floor(milliseconds / 1000) % 60,
    milliseconds: Math.floor(milliseconds) % 1000,
  };
};

const useCountDown = ({
  targetTime,
  targetDate,
  interval = 1000,
  onEnd,
}: Options = {}) => {
  const target = useCreation(() => {
    if (targetTime) {
      return targetTime > 0 ? Date.now() + targetTime : undefined;
    } else {
      return targetDate;
    }
  }, [targetDate, targetTime]);

  const [remainTime, setRemainTime] = useSafeState(() => calcRemain(target));

  const onEndRef = useLatest(onEnd);

  useEffect(() => {
    if (!target) return setRemainTime(0);

    setRemainTime(calcRemain(target));

    const timer = setInterval(() => {
      const remain = calcRemain(target);
      setRemainTime(remain);
      if (remain === 0) {
        clearInterval(timer);
        onEndRef.current?.();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [target, interval]);

  const formattedTime = useCreation(() => calcFormat(remainTime), [remainTime]);

  return [
    remainTime,
    formattedTime,
  ] as const;
};

export default useCountDown;
