'use client';
import { FC, useState, useEffect } from 'react';

import { Contents } from 'app/_components/Contents';
import { useFrame, BgBrend } from 'app/_hooks/useFrame';
import { useMenu } from 'app/_hooks/useMenu';

interface Props {
  isAuthZ: boolean;
}

export const Frame: FC<Props> = ({ isAuthZ }) => {
  const { bgImg, bgFilter } = useFrame();
  const { isShowBgPreview, onClickShowBgPreview, onClickCloseBgPreview } = useMenu();
  const [viewBgImg, setViewBgImg] = useState<string>('');
  const [viewBgFilter, setViewBgFilter] = useState<BgBrend>({ colors: [], mixBrendMode: 'difference' });

  useEffect(() => {
    setViewBgImg(bgImg);
    setViewBgFilter(bgFilter);
  }, [bgImg, bgFilter]);

  return (
    <div className="h-full min-h-screen relative bg-center bg-cover" style={{ backgroundImage: `url(${viewBgImg})` }}>
      <div
        className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-b"
        style={{
          background: `linear-gradient(to bottom, ${viewBgFilter.colors[0]}, ${viewBgFilter.colors[1]})`,
          mixBlendMode: viewBgFilter.mixBrendMode,
        }}
      >
        {isShowBgPreview && <button className="w-full h-full" onClick={onClickCloseBgPreview} />}
      </div>
      {isAuthZ && <Contents isShowBgPreview={isShowBgPreview} onClickShowBgPreview={onClickShowBgPreview} />}
    </div>
  );
};
