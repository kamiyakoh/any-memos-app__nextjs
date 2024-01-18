'use client';
import { FC } from 'react';
import { RecoilRoot } from 'recoil';

interface Props {
  children: React.ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
export default Providers;
