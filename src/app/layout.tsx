import { FC } from 'react';

import { initMocks } from 'mocks';

import type { Metadata } from 'next';

import './globals.css';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Any Memos App',
  description: 'Only one page Memo App',
  icons: { icon: '/favicon.ico' },
};

if (process.env.NODE_ENV === 'development') initMocks().catch(console.error);

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
