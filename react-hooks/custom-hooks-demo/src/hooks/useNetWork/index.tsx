import {useEventListener, useSafeState} from '../index'

interface NetworkProps {
  online?: boolean;
  rtt?: number;
  type?: 
    | 'bluetooth'
    | 'cellular'
    | 'ethernet'
    | 'none'
    | 'wifi'
    | 'wimax'
    | 'other'
    | 'unknown';
  saveData?: boolean;
  downlink?: number;
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
};

const getConnection = (): NetworkProps | undefined => {
  if (navigator && typeof navigator == 'object') {
    const nav = navigator as any;
    return {
      rtt: nav.connection?.rtt,
      type: nav.connection?.type,
      saveData: nav.connection?.saveData,
      downlink: nav.connection?.downlink,
      effectiveType: nav.connection?.effectiveType,
    };
  }
};

const useNetwork = (): NetworkProps => {
  const [net, setNet] = useSafeState(() => {
    return {
      online: navigator?.onLine,
      ...getConnection(),
    };
  });

  useEventListener('online', () => {
    setNet({
      online: true,
      ...getConnection(),
    });
  });

  useEventListener('offline', () => {
    setNet({
      online: false,
      ...getConnection(),
    });
  });
  
  return net;
};

export default useNetwork;
