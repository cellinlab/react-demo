import { useCountDown } from '../hooks'

const UseCountDownDemo = () => {
  const [remainTime, formattedTime] = useCountDown({
    targetTime: 1000 * 20,
    interval: 1000,
    onEnd: () => {
      console.log('end')
    },
  });

  return (
    <div>
      <h2>UseCountDownDemo</h2>
      <div>
        <div>剩余时间：{remainTime}</div>
        <div>
          剩余时间：
          {formattedTime.days}天{formattedTime.hours}时{formattedTime.minutes}分
          {formattedTime.seconds}秒{formattedTime.milliseconds}毫秒
        </div>
      </div>
    </div>
  )
}

export default UseCountDownDemo