import { useCss } from '../hooks'

const UseCssDemo = () => {
  const classDiv = useCss({
    width: '100px',
    height: '100px',
    background: 'red',
    color: 'white',
    textAlign: 'center',
    lineHeight: '100px',
    borderRadius: '50%',
    margin: '0 auto',
    '&:hover': {
      background: 'blue'
    }
  });

  const classP = useCss({
    p: {
      color: 'red',
      '&:nth-of-type(2)': {
        color: 'blue'
      }
    }
  });

  return (
    <div>
      <h2>UseCssDemo</h2>
      <div className={classDiv}>useCss</div>
      <div className={classP}>
        <p>useCss</p>
        <p>useCss</p>
        <p>
          useCss
        </p>
      </div>
    </div>
  )
}

export default UseCssDemo