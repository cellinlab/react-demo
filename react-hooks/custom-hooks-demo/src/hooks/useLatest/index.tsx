import { useRef } from 'react';

/**
 * 保存最新的值
 * @description 保存最新的值，返回一个只读的 ref 对象，可以通过 ref.current 获取最新的值
 * @param value 
 * @returns
 */
const useLatest = <T,>(value: T): { readonly current: T } => {
  const ref = useRef(value);

  ref.current = value;

  return ref;
};

export default useLatest;
