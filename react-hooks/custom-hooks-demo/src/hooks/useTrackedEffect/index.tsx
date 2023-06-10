import type { DependencyList } from 'react';
import { useEffect, useRef } from 'react';

type Effect = (
  changes?: number[],
  previousDeps?: DependencyList,
  currentDeps?: DependencyList,
  type_changes?: string[],
) => void | (() => void);

const onChangeEffect = (deps1?: DependencyList, deps2?: DependencyList) => {
  if (deps1) {
    return deps1
      .map((_, index) => {
        return !Object.is(deps1[index], deps2?.[index])? index : -1;
      })
      .filter((index) => index !== -1);
  } else if (deps2) {
    return deps2.map((_, index) => index);
  } else {
    return [];
  }
};

const useTrackedEffect = (
  effect: Effect,
  deps?: DependencyList,
  type_list?: string[],
) => {
  const previousDepsRef = useRef<DependencyList>();

  useEffect(() => {
    const changes = onChangeEffect(previousDepsRef.current, deps);
    const previousDeps = previousDepsRef.current;
    previousDepsRef.current = deps;
    const type_changes = (type_list || []).filter((_, index) => changes.includes(index));
    return effect(changes, previousDeps, deps, type_changes);
  }, deps);
};

export default useTrackedEffect;
