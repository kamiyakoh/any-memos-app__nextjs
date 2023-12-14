import { cookies } from 'next/headers';
import { FC } from 'react';

import { MemosList } from 'app/conponents/MemosList';
import { MemoData } from 'pages/api/types';

import { Login } from './conponents/Login';
import { New } from './conponents/New';

const Home: FC = async () => {
  const token = cookies().get('token')?.value ?? '';
  const response = await fetch(`${process.env.APP_HOST}/api/memos`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    cache: 'no-store',
  });
  let memos = [] as MemoData[];
  if (response.status === 200) memos = (await response.json()) as MemoData[];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Login />
      <New />
      <MemosList memos={memos} />
    </main>
  );
};
export default Home;
