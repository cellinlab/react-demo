import {useSafeState, useCreation} from '../index';

const useSelections = <T,>(list: T[], initValues: T[] = []) => {
  const [selected, setSelected] = useSafeState<T[]>(initValues);

  const selectedSet = useCreation(() => new Set(selected), [selected]);

  const isSelected = (item: T) => selectedSet.has(item);

  const selectAdd = (item: T | T[]) => {
    if (Array.isArray(item)) {
      item.map((i) => selectedSet.add(i));
    } else {
      selectedSet.add(item);
    }
    return setSelected(Array.from(selectedSet));
  };

  const selectRemove = (item: T | T[]) => {
    selectedSet.clear();
    if (Array.isArray(item)) {
      item.map((i) => selectedSet.delete(i));
    } else {
      selectedSet.delete(item);
    }
    return setSelected(Array.from(selectedSet));
  };

  const setSelect = (item: T | T[]) => {
    selectedSet.clear();
    if (Array.isArray(item)) {
      item.map((i) => selectedSet.add(i));
    } else {
      selectedSet.add(item);
    }
    return setSelected(Array.from(selectedSet));
  };

  const toggle = (item: T) => {
    if (isSelected(item)) {
      selectRemove(item);
    } else {
      selectAdd(item);
    }
  };

  const toggleAll = () => {
    if (allSelected) {
      unSelectAll();
    } else {
      selectAll();
    }
  };

  const noneSelected = useCreation(
    () => list.every(item => !selectedSet.has(item)),
    [list, selectedSet]
  );

  const allSelected = useCreation(() => {
    return list.every(item => selectedSet.has(item));
  }, [list, selectedSet]);

  const partiallySelected = useCreation(
    () => !noneSelected && !allSelected,
    [noneSelected, allSelected]
  );

  const selectAll = () => {
    list.map((item) => selectedSet.add(item));
    setSelected(Array.from(selectedSet));
  };

  const unSelectAll = () => {
    list.map((item) => selectedSet.delete(item));
    setSelected(Array.from(selectedSet));
  };

  return {
    selected,
    isSelected,
    selectAdd,
    selectRemove,
    toggle,
    setSelect,
    noneSelected,
    allSelected,
    partiallySelected,
    selectAll,
    unSelectAll,
    toggleAll,
  } as const;
};

export default useSelections;
