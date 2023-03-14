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
    <div
      className={`inline-flex flex-col text-left px-4 py-3 rounded-md border-1 border-transparent ${
        type === 'warning' ? 'text-amber-900' : 'text-teal-900'
      } ${type === 'warning' ? 'bg-amber-50' : 'bg-teal-50'}`}
    >
      <div className="flex items-center mb-1">
        <span
          className="w-7"
          role="img"
          aria-label={type === 'warning' ? 'Warning' : 'Information'}
        >
          {type === 'warning' ? '⚠️' : 'ℹ️'}
        </span>
        <span className="font-bold">{heading}</span>
        {closeable && (
          <button
            className="border-none bg-transparent ml-auto cursor-pointer"
            onClick={handleCloseClick}
          >
            <span role="img" aria-label="Close">
              ❌
            </span>
          </button>
        )}
      </div>
      <div className="ml-7 text-black">{children}</div>
    </div>
  );
}
