import { useState } from "react";

export function Alert(props) {
  const { type = 'information', heading, children, closeable, onClose } = props;
  const [visible, setVisible] = useState(true);

  const handleCloseClick = () => {
    setVisible(false);
    onClose && onClose();
  };
  
  if (!visible) return null;
  return (
    <div>
      <div>
        <span role="img"
          aria-label={
            type === 'warning'
              ? 'Warning'
              : 'Infomation'
          }
        >
          {type === 'warning' ? '⚠️' : 'ℹ️'}
        </span>
        <span>{heading}</span>
      </div>
      {
        closeable && (
          <button aria-label="Close" onClick={handleCloseClick}>
            <span role='img' aria-label='Close'>✖️</span>
          </button>
        )
      }
      <div>{children}</div>
    </div>
  );
}
