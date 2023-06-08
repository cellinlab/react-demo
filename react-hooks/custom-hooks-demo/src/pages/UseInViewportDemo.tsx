import { useRef } from 'react'
import { useInViewport } from '../hooks'

const UseInViewportDemo = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [inViewport, ratio] = useInViewport(ref, {
    threshold: [0, 0.25, 0.5, 0.75, 1],
    root: document.getElementById('parent'),
  })

  return (
    <div>
      <h2>
      UseInViewport
      </h2>
      <div
        id="parent"
        style={{
          height: 320,
          width: 300,
          marginBottom: 10,
          overflow: 'scroll',
          border: '1px solid black',
        }}
      >
        <p>
          Scroll down to see the box change color as it enters the viewport.
        </p>
        <div
          style={{
            height: 800,
            marginTop: 50,
            marginLeft: 20,
            border: '1px solid black',
            background: inViewport ? 'green' : 'red',
          }}
        >
          <p
            ref={ref}
            style={{
              height:200,
              width: 200,
              color: 'white',
              padding: 20,
              textAlign: 'center',
              border: '1px solid black',
            }}
          >
            {inViewport ? 'In viewport' : 'Not in viewport'}
          </p>
        </div>
      </div>
      <p>
        Ratio:{' '} {ratio}
      </p>
      <p>
        inViewport:{' '} {inViewport ? 'true' : 'false'}
      </p>
    </div>
  )
}

export default UseInViewportDemo;
