import { useState } from 'react';

import './Alert.css';

type Props = {
  type?: string;
  heading: string;
  children: React.ReactNode;
  closeable?: boolean;
  onClose?: () => void;
};

export function Alert({ type = 'information', heading, children, closeable, onClose }: Props) {
  const [visible, setVisible] = useState<boolean>(true);
  const handleCloseClick: () => void = () => {
    setVisible(false);
    onClose && onClose();
  };
  if (!visible) {
    return <div>Gone !</div>;
  }
  return (
    <div className={`container ${type}`}>
      <div className="header">
        <span
          className="header-icon"
          role="img"
          aria-label={type === 'warning' ? 'Warning' : 'Information'}
        >
          {type === 'warning' ? '⚠️' : 'ℹ️'}
        </span>
        <span className="header-text">{heading}</span>
        {closeable && (
          <button className="close-btn" onClick={handleCloseClick}>
            <span role="img" aria-label="Close">
              ❌
            </span>
          </button>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
