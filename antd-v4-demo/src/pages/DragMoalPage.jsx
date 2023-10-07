import React, {useState} from 'react'
import {Button} from 'antd'

import DragMoal from './DragMoal'

const DragMoalPage = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <h3>DragMoalPage</h3>
      <Button onClick={() => setVisible(true)}>Open Modal</Button>
      <DragMoal
        visible={visible}
        onCancel={() => setVisible(false)}
      />
    </div>
  )
}

export default DragMoalPage