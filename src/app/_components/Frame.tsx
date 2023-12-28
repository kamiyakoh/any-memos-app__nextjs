'use client';
import { FC } from 'react';

import { Contents } from './Contents';
import { useFrame } from '../_hooks/useFrame';
import { useMenu } from '../_hooks/useMenu';

interface Props {
  isAuthZ: boolean;
}

export const Frame: FC<Props> = ({ isAuthZ }) => {
  const { bgImg, bgFilter } = useFrame();
  const { isShowBgPreview, onClickShowBgPreview, onClickCloseBgPreview } = useMenu();

  return (
    <div className="h-full min-h-screen relative bg-center bg-cover" style={{ backgroundImage: `url(${bgImg})` }}>
      <div
        className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-b"
        style={{
          background: `linear-gradient(to bottom, ${bgFilter.colors[0]}, ${bgFilter.colors[1]})`,
          mixBlendMode: bgFilter.mixBrendMode,
        }}
      >
        {isShowBgPreview && <button className="w-full h-full" onClick={onClickCloseBgPreview} />}
      </div>
      {isAuthZ && <Contents isShowBgPreview={isShowBgPreview} onClickShowBgPreview={onClickShowBgPreview} />}
    </div>
  );
};
