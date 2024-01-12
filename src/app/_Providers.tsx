'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC } from 'react';
import { RecoilRoot } from 'recoil';

interface Props {
  children: React.ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </RecoilRoot>
  );
};
export default Providers;
