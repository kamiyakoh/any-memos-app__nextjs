import { cookies } from 'next/headers';

export const getIsAuthZ = async (): Promise<boolean> => {
  const token = cookies().get('token')?.value ?? '';
  const response = await fetch(`${process.env.APP_HOST}/api/memos`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    cache: 'no-store',
  });
  const isAuthZ = response.status === 200;

  return isAuthZ;
};
