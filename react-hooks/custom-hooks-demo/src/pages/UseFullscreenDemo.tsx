import { useRef } from 'react'

import { useFullscreen } from '../hooks'

const UseFullscreenDemo = () => {
  const refDiv1 = useRef<HTMLDivElement>(null)
  const refDiv2 = useRef<HTMLDivElement>(null)

  const { 
    isFullscreen: isFullscreen1,
    enterFullscreen: enterFullscreen1,
    exitFullscreen: exitFullscreen1
  } = useFullscreen(refDiv1, {
    onEnter: () => {
      console.log('进入全屏 1')
    },
    onExit: () => {
      console.log('退出全屏 1')
    }
  });


  const {
    isFullscreen: isFullscreen2,
    enterFullscreen: enterFullscreen2,
    exitFullscreen: exitFullscreen2
  } = useFullscreen(refDiv2, {
    onEnter: () => {
      console.log('进入全屏 2')
    },
    onExit: () => {
      console.log('退出全屏 2')
    }
  });

  return (
    <div>
      <h2>UseFullscreenDemo</h2>
      <div ref={refDiv1} style={{ background: '#eee', padding: 20 }}>
        <h3>div1</h3>
        <p>isFullscreen: {isFullscreen1 ? 'true' : 'false'}</p>
        <button onClick={enterFullscreen1}>进入全屏</button>
        <button onClick={exitFullscreen1}>退出全屏</button>
      </div>
      <div ref={refDiv2} style={{ background: '#eee', padding: 20 }}>
        <h3>div2</h3>
        <p>isFullscreen: {isFullscreen2 ? 'true' : 'false'}</p>
        <button onClick={enterFullscreen2}>进入全屏</button>
        <button onClick={exitFullscreen2}>退出全屏</button>
      </div>
    </div>
  )
}

export default UseFullscreenDemo