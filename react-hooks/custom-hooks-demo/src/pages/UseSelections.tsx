import { useState } from 'react'

import { useSelections } from '../hooks'

const UseSelections = () => {
  const [list, setList] = useState([1, 2, 3, 4, 5])

  const {
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
  } = useSelections(list)

  return (
    <div>
      <h2>UseSelections</h2>
      <div>
        <ul>
          {list.map((item) => (
            <li
              key={item}
              style={{
                backgroundColor: isSelected(item) ? 'red' : 'transparent',
              }}
              onClick={() => toggle(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        <div>
          <button onClick={selectAll}>全选</button>
          <button onClick={unSelectAll}>全不选</button>
          <button onClick={toggleAll}>反选</button>
          <button onClick={() => setSelect([1, 2, 3])}>设置指定选中项</button>
          <button onClick={() => selectAdd(4)}>添加选项</button>
        </div>
      </div>
    </div>
  )
}

export default UseSelections