import { Metadata } from 'next';
import { FC } from 'react';

import 'app/globals.css';
import Providers from 'app/_Providers';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Any Memos App',
  description: 'Only one page Memo App',
  icons: { icon: '/favicon.ico' },
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};
export default RootLayout;
