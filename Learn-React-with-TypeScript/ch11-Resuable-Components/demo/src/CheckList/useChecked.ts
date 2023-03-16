import { useState } from 'react';

import { IdValue } from './types';

export function useChecked() {
  const [checkedIds, setCheckedIds] = useState<IdValue[]>([]);
  const toggleChecked = (id: IdValue) => () => {
    console.log('checkedIds', checkedIds);
    const isChecked = checkedIds.includes(id);
    console.log('isChecked', isChecked);
    let newCheckedIds = isChecked
      ? checkedIds.filter((checkedId) => checkedId !== id)
      : [...checkedIds, id];
    console.log('newCheckedIds', newCheckedIds);
    setCheckedIds(newCheckedIds);
  };

  return { checkedIds, toggleChecked };
}
