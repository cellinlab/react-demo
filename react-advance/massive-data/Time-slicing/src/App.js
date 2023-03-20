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
    eachRenderNum: 500,
  }
  box = React.createRef()
  componentDidMount() {
    console.log("componentDidMount")
    const { offsetWidth, offsetHeight } = this.box.current
    const originList = new Array(20000).fill(1)
    const times = Math.ceil(originList.length / this.state.eachRenderNum)
    let index = 1
    this.setState(
      {
        dataList: originList,
        position: {
          width: offsetWidth,
          height: offsetHeight,
        },
      },
      () => {
        this.toRenderList(index, times)
      }
    )
  }
  toRenderList = (index, times) => {
    if (index > times) return
    const { renderList } = this.state
    renderList.push(this.renderNewList(index))
    this.setState({
      renderList,
    })
    requestIdleCallback(() => {
      this.toRenderList(++index, times)
    })
  }
  renderNewList = (index) => {
    console.log(`renderNewList: ${index}`)
    const { dataList, position, eachRenderNum } = this.state
    const list = dataList.slice((index - 1) * eachRenderNum, index * eachRenderNum)
    return (
      <React.Fragment key={index}>
        {list.map((item, i) => {
          return <Circle key={`${index}-${i}`} position={position} />
        })}
      </React.Fragment>
    )
  }
  render() {
    const { renderList } = this.state
    return (
      <div className="box" ref={this.box}>
        {renderList}
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
