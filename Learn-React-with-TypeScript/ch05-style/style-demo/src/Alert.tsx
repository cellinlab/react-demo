import { useState } from 'react';

import styles from './Alert.module.css';

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
    <div className={`${styles.container} ${styles[type]}`}>
      <div className={styles.header}>
        <span
          className={styles.headerIcon}
          role="img"
          aria-label={type === 'warning' ? 'Warning' : 'Information'}
        >
          {type === 'warning' ? '⚠️' : 'ℹ️'}
        </span>
        <span className={styles.headerText}>{heading}</span>
        {closeable && (
          <button className={styles.closeBtn} onClick={handleCloseClick}>
            <span role="img" aria-label="Close">
              ❌
            </span>
          </button>
        )}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
