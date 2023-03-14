import { useState } from 'react';

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
    <div>
      <div>
        <span role="img" aria-label={type === 'warning' ? 'Warning' : 'Information'}>
          {type === 'warning' ? '⚠️' : 'ℹ️'}
        </span>
        <strong>{heading}</strong>
      </div>
      {closeable && <button onClick={handleCloseClick}>Close</button>}
      <div>{children}</div>
    </div>
  );
}
