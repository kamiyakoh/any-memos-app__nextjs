'use client';
// import { cookies } from 'next/headers';
import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

// import { MemoData } from 'pages/api/types';

// import { Login } from './_components/Login';
// import { Modal } from './_components/uiParts/Modal';
import { Contents } from 'app/_components/Contents';

import { useHome } from './_hooks/useHome';
import { useMenu } from './_hooks/useMenu';

const Home: FC = () => {
  /*   const token = cookies().get('token')?.value ?? '';
  const response = await fetch(`${process.env.APP_HOST}/api/memos`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    cache: 'no-store',
  });
  let memos = [] as MemoData[];
  if (response.status === 200) memos = (await response.json()) as MemoData[]; */

  const { bgImg, bgFilter } = useHome();
  const { isShowBgPreview, onClickShowBgPreview, onClickCloseBgPreview } = useMenu();

  return (
    <div>
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
        <Contents isShowBgPreview={isShowBgPreview} onClickShowBgPreview={onClickShowBgPreview} />
      </div>
      <Toaster
        toastOptions={{
          style: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            background: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            maxWidth: '90vw',
            padding: '1rem',
            backdropFilter: 'blur(4px)',
          },
        }}
      />
    </div>
  );
};
export default Home;
