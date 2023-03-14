import { useState } from 'react';

import { ReactComponent as CrossIcon } from './cross.svg';
import { ReactComponent as InfoIcon } from './info.svg';
import { ReactComponent as WarningIcon } from './warning.svg';

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
          {type === 'warning' ? (
            <WarningIcon className="fill-amber-900 w-5 h-5" />
          ) : (
            <InfoIcon className="fill-teal-900 w-5 h-5" />
          )}
        </span>
        <span className="font-bold">{heading}</span>
        {closeable && (
          <button
            className="border-none bg-transparent ml-auto cursor-pointer"
            onClick={handleCloseClick}
          >
            <span role="img" aria-label="Close">
              <CrossIcon className="fill-current w-5 h-5" />
            </span>
          </button>
        )}
      </div>
      <div className="ml-7 text-black">{children}</div>
    </div>
  );
}
