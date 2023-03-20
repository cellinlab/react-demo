import React from 'react';

function getColor() {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return `rgb(${r}, ${g}, ${b}, 0.8)`
}

function getPosition(position) {
  const { width, height } = position
  return {
    left: Math.floor(Math.random() * width) + "px",
    top: Math.floor(Math.random() * height) + "px",
  }
}

function Circle({ position }) {
  const style = React.useMemo(() => {
    return {
      ...getPosition(position),
      backgroundColor: getColor(),
    }
  }, [])
  return <div className="circle" style={style}></div>
}

class Index extends React.Component {
  state = {
    dataList: [],
    renderList: [],
    position: {
      width: 0,
      height: 0,
    },
  }
  box = React.createRef()
  componentDidMount() {
    const { offsetWidth, offsetHeight } = this.box.current
    const originList = new Array(20000).fill(1)
    this.setState({
      dataList: originList,
      position: {
        width: offsetWidth,
        height: offsetHeight,
      },
      renderList: originList,
    })
  }
  render() {
    const { renderList, position } = this.state
    return (
      <div className="box" ref={this.box}>
        {renderList.map((item, index) => {
          return <Circle key={index} position={position} />
        })}
      </div>
    )
  }
}
export function Home() {
  const [show, setShow] = React.useState(false)
  const [btnShow, setBtnShow] = React.useState(true)
  const handleClick = () => {
    setBtnShow(false)
    setTimeout(() => {
      setShow(true)
    }, [])
  }
  return (
    <div>
      {btnShow && <button onClick={handleClick}>点击</button>}
      {show && <Index />}
    </div>
  )
}

export default function App() {
  return <Home />
}
