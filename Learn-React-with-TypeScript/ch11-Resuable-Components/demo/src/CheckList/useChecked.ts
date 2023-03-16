import { useState, useEffect } from 'react';

import { IdValue } from './types';

type Params = {
  checkedIds?: IdValue[];
  onCheckedIdsChange?: (checkedIds: IdValue[]) => void;
};

export function useChecked({ checkedIds, onCheckedIdsChange }: Params) {
  const [resolveedCheckedIds, setResolvedCheckedIds] = useState<IdValue[]>(checkedIds || []);
  const toggleChecked = (id: IdValue) => () => {
    const isChecked = resolveedCheckedIds.includes(id);
    let newCheckedIds = isChecked
      ? resolveedCheckedIds.filter((checkedId) => checkedId !== id)
      : [...resolveedCheckedIds, id];
    if (onCheckedIdsChange) {
      onCheckedIdsChange(newCheckedIds);
    } else {
      setResolvedCheckedIds(newCheckedIds);
    }
  };

  useEffect(() => {
    const isControlled = checkedIds !== undefined;
    if (isControlled) {
      setResolvedCheckedIds(checkedIds);
    }
  }, [checkedIds]);

  return { toggleChecked, resolveedCheckedIds };
}
