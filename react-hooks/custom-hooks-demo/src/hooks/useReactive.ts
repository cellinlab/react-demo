import { useUpdate, useCreation, useLatest } from '.';

const observer = <T extends Record<string, any>>(
  initialValaue: T,
  cb: () => void
): T => {
  const proxy = new Proxy<T>(initialValaue, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      return typeof res === 'object' ? observer(res, cb) : Reflect.get(target, key);
    },
    set(target, key, value) {
      const res = Reflect.set(target, key, value);
      cb();
      return res;
    },
  });

  return proxy;
};

const useReactive = <T extends Record<string, any>>(initialState: T): T => {
  const ref = useLatest<T>(initialState);
  const update = useUpdate();

  const state = useCreation(() => {
    return observer(ref.current, () => {
      update();
    });
  }, []);

  return state;
}

export default useReactive;
