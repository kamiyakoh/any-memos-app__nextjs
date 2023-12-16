import { FC } from 'react';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const FrostedGlass: FC<Props> = ({ className, style, children }) => {
  const addedStyle = {
    backdropFilter: 'blur(4px)',
    ...style,
  };

  return (
    <div className={`text-white bg-black bg-opacity-50 rounded p-4 ${className ?? ''}`} style={addedStyle}>
      {children}
    </div>
  );
};
