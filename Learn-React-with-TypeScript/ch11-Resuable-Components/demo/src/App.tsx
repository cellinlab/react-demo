import { useState } from 'react';
import { CheckList, IdValue } from './CheckList';

function App() {
  const [checkedId, setCheckedId] = useState<IdValue | null>(null);
  function handleCheckedIdsChange(newCheckedIds: IdValue[]) {
    const newCheckedIdArr = newCheckedIds.filter((id) => id !== checkedId);
    if (newCheckedIdArr.length === 1) {
      setCheckedId(newCheckedIdArr[0]);
    } else {
      setCheckedId(null);
    }
  }
  return (
    <div className="p-10">
      <CheckList
        data={[
          { id: 1, name: 'Cell', role: 'Manager' },
          { id: 2, name: 'John', role: 'Developer' },
          { id: 3, name: 'Jane', role: 'Developer' },
          { id: 4, name: 'Peter', role: 'UI' },
          { id: 5, name: 'Mary', role: 'UI' },
          { id: 6, name: 'Mike', role: 'QA' },
        ]}
        id="id"
        primary="name"
        secondary="role"
        checkedIds={checkedId ? [checkedId] : []}
        onCheckedIdsChange={handleCheckedIdsChange}
        style={{
          width: '300px',
          maxHeight: '380px',
          overflowY: 'auto',
        }}
        // renderItem={(item) => (
        //   <li key={item.id} className="bg-white p-4 border-b-2">
        //     <div className="text-xl to-slate-800 pb-1">{item.name}</div>
        //     <div className="text-slate-500">{item.role}</div>
        //   </li>
        // )}
      />
    </div>
  );
}

export default App;
