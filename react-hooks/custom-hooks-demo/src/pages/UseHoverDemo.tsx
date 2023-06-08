import { useRef } from 'react'

import { useHover } from '../hooks'

const UseHoverDemo = () => {
  const hoverRef = useRef<HTMLDivElement>(null)

  const isHover = useHover(hoverRef, {
    onEnter: () => {
      console.log('onEnter')
    },
    onLeave: () => {
      console.log('onLeave')
    }
  })
  return (
    <div>
      <h2>UseHoverDemo</h2>
      <div ref={hoverRef}
        style={{
          width: 200,
          height: 200,
          background: isHover ? 'green' : 'red',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40
        }}
      >
        <p>Hover me!</p>
        {isHover ? '😁' : '☹️'}
      </div>
    </div>
  )
}

export default UseHoverDemo